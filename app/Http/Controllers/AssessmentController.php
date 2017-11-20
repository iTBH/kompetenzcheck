<?php

namespace App\Http\Controllers;

use App\Models\Check;
use App\Models\Run;
use App\Models\RunPhrase;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Exception\RequestExceptionInterface;

class AssessmentController extends Controller
{
    public function index(Check $check)
    {
        if( !$check->id ) {
            session()->flash('status', ['message' => 'Der gewählte Check existiert nicht.', 'level' => 'error']);
            return redirect(route('dashboard.index'));
        }

        $locked = $check->getLockedStatus();
        if($locked) {
            $locked = Carbon::createFromFormat('Y-m-d', $locked);
            session()->flash('status', ['message' => 'Der Check wurde bereits am ' . $locked->format('d.m.Y') . ' abgeschlossen.', 'level' => 'error']);
            return redirect(route('dashboard.index'));
        }

        // Get Phrases and Phases by Check
        $phases = $check->phases()->get();

        // Add this Assessment as Run or get the RunId
        $run = $this->findOrCreateRunByCheck($check);

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

        return view('assessment.index', [
            'check' => $check,
            'phases' => $data,
            'run' => $run
        ]);
    }

    private function findOrCreateRunByCheck($check)
    {
        // Check if currently a run exists
        $run = (new Run)->where([
            ['check_id', '=', $check->id],
            ['type', '=', 'me']
        ])->whereNull('end')->first();

        // Get all existing runs
        $runAll = (new Run)->where([
            ['check_id', '=', $check->id],
            ['type', '=', 'me']
        ])->get();

        if (!$run && $runAll->count() <= 1) {
            // No existing Run and count = 0 => this is the First Run!
            // / OR \
            // The first run already has an end and count = 1, so we are starting the second run

            $run = (new Run)->create([
                'start' => Carbon::now(),
                'type' => 'me',
                'check_id' => $check->id
            ]);
        } elseif ($run && $runAll->count() == 1) {
            // The first run has not been ended, so we need to delete the run_phrases
            (new RunPhrase)->where([['run_id', '=', $run->id]])->delete();
            $run->start = Carbon::now();
            $run->save();
        } elseif (!$run && $runAll->count() == 2) {
            $run = $runAll->last();
        }

        return $run;
    }

    public function create(Check $check, Request $request)
    {
        $runphrase = new RunPhrase();
        if ($request->get('runphrase')) {
            $runphrase = $runphrase->find($request->get('runphrase'));
        }

        return response()->json([
            'modal' => [
                'header' => '<h1>Kompetenz bewerten</h1>',
                'content' => view('assessment.dialog',
                    [
                        'check' => $check,
                        'phrase' => $check->phrases()->where('phases_checks_phrases.id', $request->get('phrase'))->first(),
                        'run' => (new Run)->find($request->get('run')),
                        'runphrase' => $runphrase
                    ])->render(),
                'actions' => view('assessment.actions._actions')->render()
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

    public function save(Check $check, Request $request)
    {
        if( $check->id && $request->only('run') ) {
            (new Run)->find($request->get('run'))->update([
                'end' => Carbon::now()
            ]);
            session()->flash('status', ['message' => 'Die Einschätzung wurde erfolgreich abgeschlossen.', 'level' => 'success']);
        } else {
            session()->flash('status', ['message' => 'Die Einschätzung konnte nicht abgeschlossen werden.', 'level' => 'error']);
        }
        return redirect()->route('dashboard.index');
    }
}
