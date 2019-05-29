<?php

namespace App\Http\Controllers;

use App\Helper\ShareHelper;
use App\Mail\AssignCheck;
use App\Models\Assignment;
use App\Models\Check;
use App\Models\Partner;
use App\Models\PhasesCheck;
use App\Models\Phrase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;

class AssignController extends Controller
{
    public function index(Check $check)
    {
        $partner = [];
        foreach (Auth::user()->partners as $p) {
            $partner[$p->id] = $p->email;
        }


        return response()->json([
            'modal' => [
                'header' => '<h1>Check zuweisen</h1>',
                'content' => view('checks.assign.index', ['check' => $check, 'partners' => $partner])->render(),
                'actions' => view('checks.assign.actions.actions')->render()
            ]
        ]);
    }

    public function store(Request $request)
    {
        $partner = $request->has('check-assign-mail') ? (new Partner())->find($request->get('check-assign-mail')) : null;
        $check = $request->has('check-id') ? (new Check())->find($request->get('check-id')) : null;

        if ($check && $partner) {
            $user = $partner->findUserByMail();
            if ($user) {
                $shareKey = null;

                $newCheck = $check->replicate();
                $newCheck->title .= " (Zugewiesen)";
                $newCheck->user_id = $user->id;
                $newCheck->share_key = (new ShareHelper())->getUniqueShareKey();
                $newCheck->created_by = "assigned";
                $newCheck->allow_assignment = false;
                $newCheck->save();

                foreach ($check->phasesChecks as $phasesCheck) {
                    $newPhasesCheck = (new PhasesCheck())->create(
                        [
                            'check_id' => $newCheck->id,
                            'phase_id' => $phasesCheck->phase_id,
                            'sort' => $phasesCheck->sort,
                        ]
                    );

                    foreach ($phasesCheck->phrases as $phasesCheckPhrase) {
                        (new Phrase())->create([
                            'phases_checks_id' => $newPhasesCheck->id,
                            'statement' => $phasesCheckPhrase->statement,
                            'category_id' => $phasesCheckPhrase->category_id
                        ]);
                    }
                }

                foreach ($check->tags as $tag) {
                    $newCheck->tags()->attach($tag);
                }
            } else {
                $shareKey = $check->share_key;
            }

            $email = new AssignCheck($shareKey, $partner);
            Mail::to($partner->email)->send($email);
            session()->flash('status', ['message' => 'Check wurde zugewiesen.', 'level' => 'success']);

            Assignment::create([
                'check_id' => $check->id,
                'assigned_to' => $user ? $user->email : $partner->email,
                'assigned_by' => $check->user_id,
            ]);

            return;
        }

        session()->flash('status', ['message' => 'Check konnte nicht zugewiesen werden. Versuchen Sie es erneut.', 'level' => 'error']);
    }

    public function allow(Check $check)
    {
        if ($check) {
            $check->allow_assignment = true;
            $check->save();

            session()->flash('status', ['message' => 'Check wurde erfolgreich angenommen.', 'level' => 'success']);
        } else {
            session()->flash('status', ['message' => 'Check kann nicht angenommen werden. Haben Sie ihn bereits angenommen oder abgelehnt?.', 'level' => 'danger']);
        }

        return redirect()->route('dashboard.index');
    }

    public function decline(Check $check)
    {
        if ($check && Auth::user()->can('delete', $check)) {
            $check->delete();
            session()->flash('status', ['message' => 'Check wurde erfolgreich abgelehnt und gelöscht.', 'level' => 'success']);
        } else {
            session()->flash('status', ['message' => 'Check kann nicht abgelehnt werden. Versuchen Sie es später erneut.', 'level' => 'danger']);
        }

        return redirect()->route('dashboard.index');
    }
}
