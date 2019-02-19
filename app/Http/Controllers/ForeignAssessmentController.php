<?php

namespace App\Http\Controllers;

use App\Mail\ForeignAssessment;
use App\Models\Check;
use App\Models\Invitation;
use App\Models\InvitationStatus;
use App\Models\Partner;
use App\Models\Phrase;
use App\Models\Run;
use App\Models\RunPhrase;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Str;
use Symfony\Component\HttpFoundation\Exception\RequestExceptionInterface;
use Illuminate\Support\Facades\Auth;


class ForeignAssessmentController extends Controller
{
    public function index($url_hash)
    {
        $invitation = (new Invitation())->where('url_hash', $url_hash)->first();
        if (!$invitation) {
            session()->flash('status', ['message' => 'Ihre Einladung ist nicht mehr gültig.', 'level' => 'error']);
            return redirect(route('login'));
        }
        $check = (new Check())->find($invitation->check_id);

        if (!$check || $check->getLockedStatus()) {
            session()->flash('status', ['message' => 'Der Check wurde entfernt oder ist bereits abgeschlossen.', 'level' => 'error']);
            return redirect(route('login'));
        }

        session()->put('current_check', $check);

        // Get Phrases and Phases by Check
        $phases = $check->phases()->get();

        // Add this Assessment as Run or get the RunId
        $run = $this->_findOrCreateRunForInvitation($invitation, $check);

        // Create data array with phases and phrases
        $data = [];
        foreach ($phases as $_phase) {
            $data[$_phase->pivot->sort]['phase'] = $_phase;
            $data[$_phase->pivot->sort]['phrases'] = $check->phrases()->where('phases_checks_id', $_phase->pivot->id)->get();
            if (!empty($data[$_phase->pivot->sort]['phrases'])) {
                foreach ($data[$_phase->pivot->sort]['phrases'] as $_phrase) {
                    $runPhrase = (new RunPhrase)->where([['run_id', '=', $run->id], ['phases_checks_phrases_id', '=', $_phrase->id]])->first();
                    if ($runPhrase) {
                        $data[$_phase->pivot->sort]['run_phrases'][$_phrase->id] = $runPhrase;
                    }
                }
            }
        }

        return view('foreign_assessment.index', [
            'check' => $check,
            'phases' => $data,
            'run' => $run
        ]);

    }

    private function _findOrCreateRunForInvitation($invitation, $check = null)
    {
        if (is_null($check)) {
            $check = (new Check())->find($invitation->check_id);
        }

        // Check if currently a run exists
        $run = (new Run)->where([
            ['check_id', '=', $check->id],
            ['invitation_id', '=', $invitation->id],
            ['type', '=', 'they']
        ])/*->whereNull('end')*/
        ->first();

        // if the run is not present, create it
        if (!$run) {
            $run = (new Run)->create([
                'start' => Carbon::now(),
                'type' => 'they',
                'check_id' => $check->id,
                'invitation_id' => $invitation->id
            ]);
        }

        return $run;
    }

    public function save(Check $check, Request $request)
    {
        $existingInvitations = $check->invitations;
        if ($existingInvitations->count() == 2) {
            session()->flash('status', ['message' => 'Es wurden bereits zwei Einladungen verschickt', 'level' => 'error']);
            return response()->json(['message' => 'Es wurden bereits zwei Einladungen verschickt.', 'level' => 'error']);
        }

        $this->validate($request, [
            'email' => 'required|email',
            'firstname' => 'required',
            'lastname' => 'required',
            'foreign-invite-salutation' => 'required',
        ]);

        // Get or Create Partner
        $partner = (new Partner())
            ->where('email', $request->get('email'))
            ->where('user_id', Auth::user()->id)
            ->first();

        if (!$partner) {
            $partner = (new Partner())->create([
                'salutation' => $request->get('foreign-invite-salutation'),
                'firstname' => $request->get('firstname'),
                'lastname' => $request->get('lastname'),
                'email' => $request->get('email'),
                'user_id' => Auth::user()->id
            ]);
        }

        // get the default invitation status
        try {
            $status = (new InvitationStatus())->where('default', 1)->firstOrFail();
        } catch (Exception $e) {
            session()->flash('status', ['message' => 'Einladung konnte nicht versendet werden. Bitte versuchen Sie es erneut', 'level' => 'error']);
            return back();
        }

        // Create Invitation
        $urlHash = $this->getUniqueHashForInvitiations();
        $invitation = (new Invitation())->create([
            'check_id' => $check->id,
            'status_id' => $status->id,
            'partner_id' => $partner->id,
            'salutation' => $request->has('foreign-invite-salutation') ? $request->get('foreign-invite-salutation') : null,
            'firstname' => $request->has('firstname') ? $request->get('firstname') : null,
            'lastname' => $request->has('lastname') ? $request->get('lastname') : null,
            'email' => $request->has('email') ? $request->get('email') : null,
            'url_hash' => $urlHash
        ]);

        // Create Run!
        $this->_findOrCreateRunForInvitation($invitation, $check);

        $mail = (new ForeignAssessment($invitation));
        Mail::to($request->get('email'))->send($mail);

        return response()->json(['message' => 'Einladung erfolgreich versendet.', 'level' => 'success']);
    }

    public function invite(Check $check)
    {
        return response()->json([
            'modal' => [
                'header' => '<h1>Einladung zur Fremdeinschätzung</h1>',
                'content' => view('checks.invite_foreign.index', ['check' => $check])->render(),
                'actions' => view('checks.invite_foreign.actions.actions')->render()
            ]
        ]);
    }

    protected function getUniqueHashForInvitiations($length = 32)
    {
        while (true) {
            $unique = $this->createUniqueHash($length);
            if (!(new Invitation())->where('url_hash', $unique)->first()) {
                return $unique;
            }
        }
    }

    private function createUniqueHash($length = 32)
    {
        return Str::random($length);
    }

    public function create(Request $request)
    {
        $check = session('current_check');
        if (!$check) {
            abort('500');
        }

        $runphrase = (new RunPhrase());
        if ($request->get('runphrase')) {
            $runphrase = $runphrase->find($request->get('runphrase'));
        }

        $phrase = $check->phrases()->where('phases_checks_phrases.id', $request->get('phrase'))->first();
        if (!$phrase) {
            abort('500');
        }

        return response()->json([
            'modal' => [
                'header' => '<h1>Kompetenz einschätzen</h1>',
                'content' => view('foreign_assessment.dialog',
                    [
                        'check' => $check,
                        'phrase' => $phrase,
                        'run' => (new Run)->find($request->get('run')),
                        'runphrase' => $runphrase
                    ])->render(),
                'actions' => view('foreign_assessment.actions._actions')->render()
            ]
        ]);
    }

    public function store(Request $request)
    {
        if ($request->get('runphrase')) {
            return $this->update($request, $request->get('runphrase'));
        }

        $run_phrase = (new RunPhrase)->create([
            'rating' => $request->get('rating'),
            'comment' => $request->get('comment'),
            'run_id' => $request->get('run'),
            'phases_checks_phrases_id' => $request->get('phrase')
        ]);

        return response()->json([
            'runphrase' => $run_phrase->id
        ]);
    }

    public function update(Request $request, $id)
    {
        (new RunPhrase)->find($id)->update([
            'rating' => $request->get('rating'),
            'comment' => $request->get('comment'),
            'run_id' => $request->get('run'),
            'phases_checks_phrases_id' => $request->get('phrase')
        ]);

        return response()->json([
            'runphrase' => $id
        ]);
    }

    public function complete(Request $request, $check, Run $run)
    {
        if(!$run->runPhrases->count()) {
            session()->flash('status', ['message' => 'Die Fremdeinschätzung konnte nicht abgeschlossen werden.<br /><ul><li>Bitte geben Sie mindestens eine Einschätzung ab.</li></ul>', 'level' => 'error']);
            return redirect()->back();
        }

        $run->update([
            'end' => Carbon::now()
        ]);

        foreach ($run->runPhrases as $phrase) {
            if ($phrase->rating == null) {
                $phrase->rating = 0;
                $phrase->save();
            }
        }

        session()->flash('status', ['message' => 'Ihre Fremdeinschätzung wurde erfolgreich abgeschlossen.', 'level' => 'success']);

        return redirect()->back();
    }
}
