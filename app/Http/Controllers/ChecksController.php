<?php

namespace App\Http\Controllers;

use App\Helper\ShareHelper;
use App\Models\Check;
use App\Models\Phase;
use App\Models\PhasesCheck;
use App\Models\Phrase;
use App\Models\Run;
use Auth;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ChecksController extends Controller
{
    /**
     * Placeholder
     */
    public function index()
    {
        return redirect()->route('dashboard.index');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('checks.create', [
            'tags' => $this->getTags(),
            'check' => (new Check())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required',
            'purpose' => 'required',
            'description' => 'required',
        ]);

        $request['share_key'] = (new ShareHelper)->getUniqueShareKey();

        $check = Auth::user()->checks()->create($request->except(['tags', 'phase', 'phrase']));
        $check->retag($request->get('tags'));

        $phrases = $request->get('phrase');
        $phrasesByTab = [];
        if (!empty($phrases)) {
            foreach ($phrases as $_phrase) {
                $phrasesByTab[$_phrase['tab']][] = $_phrase;
            }
        }

        $phases = $request->get('phase');
        if (!empty($phases)) {
            foreach ($phases as $_sort => $_phase) {
                $phase = (new Phase)->where(['name' => $_phase, 'user_id' => Auth::user()->id])->first();

                if (!$phase) {
                    // Save existing Phase ID to Check
                    $phase = Auth::user()->phases()->create([
                        'name' => $_phase
                    ]);
                }

                $phaseCheck = (new PhasesCheck)->create([
                    'check_id' => $check->id,
                    'phase_id' => $phase->id,
                    'sort' => $_sort
                ]);

                if (isset($phrasesByTab[$_sort]) && !empty($phrasesByTab)) {
                    foreach ($phrasesByTab[$_sort] as $_phrase) {
                        (new Phrase)->create([
                            'phases_checks_id' => $phaseCheck->id,
                            'statement' => $_phrase['statement'],
                            'category_id' => $_phrase['category'],
                        ]);
                    }
                }
            }
        }

        return redirect()->route('check.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show(Check $check)
    {
        return view('checks.show', [
            'tags' => $this->getTags(),
            'check' => $check,
            'phases' => $this->getPhasesByCheck($check)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Check $check)
    {
        return view('checks.edit', [
            'tags' => $this->getTags(),
            'check' => $check,
            'phases' => $this->getPhasesByCheck($check)
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Check $check)
    {
        if (Auth::user()->can('update', $check)) {
            $check->update($request->except(['tags', 'phase', 'phrase']));
            $check->retag($request->get('tags'));

            $phrases = $request->get('phrase');
            $phrasesByTab = [];
            if (!empty($phrases)) {
                foreach ($phrases as $_phrase) {
                    $phrasesByTab[$_phrase['tab']][] = $_phrase;
                }
            }

            // Delete all PhaseChecks
            foreach ((new PhasesCheck)->where(['check_id' => $check->id])->cursor() as $phaseCheck) {
                $phaseCheck->phrases()->delete();
                $phaseCheck->delete();
            }

            $phases = $request->get('phase');
            if (!empty($phases)) {
                foreach ($phases as $_sort => $_phase) {
                    $phase = (new Phase)->where(['name' => $_phase, 'user_id' => Auth::user()->id])->first();

                    if (!$phase) {
                        // Save existing Phase ID to Check
                        $phase = Auth::user()->phases()->create([
                            'name' => $_phase
                        ]);
                    }

                    $phaseCheck = (new PhasesCheck)->create([
                        'check_id' => $check->id,
                        'phase_id' => $phase->id,
                        'sort' => $_sort
                    ]);

                    if (isset($phrasesByTab[$_sort]) && !empty($phrasesByTab[$_sort])) {
                        foreach ($phrasesByTab[$_sort] as $_phrase) {
                            (new Phrase)->create([
                                'phases_checks_id' => $phaseCheck->id,
                                'statement' => $_phrase['statement'],
                                'category_id' => $_phrase['category'],
                            ]);
                        }
                    }

                }
            }
        }

        return redirect()->route('check.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Check $check)
    {
        if (Auth::user()->can('delete', $check)) {
            $check->delete();
        }

        return redirect()->route('check.index');
    }

    /**
     * @param Check $check
     * @return \Illuminate\Http\RedirectResponse
     */
    public function duplicate(Check $check)
    {
        if (Auth::user()->can('duplicate', $check)) {
            $newCheck = $check->replicate();
            $newCheck->title .= " (Kopie)";
            $newCheck->created_by = "duplicated";
            $newCheck->share_key = (new ShareHelper())->getUniqueShareKey();
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

            $newCheck->save();
        }

        return redirect()->route('check.edit', $newCheck->id);
    }

    /**
     * @param Check $check
     * @return \Illuminate\Http\RedirectResponse
     */
    public function anonymize(Check $check)
    {
        if (Auth::user()->can('anonymize', $check)) {
            $check->status()->create([
                'state' => 'anonymised',
                'date' => Carbon::now()->format('Y-m-d')
            ]);
        }

        return redirect()->route('check.index');
    }

    /**
     * @param Check $check
     * @return \Illuminate\Http\RedirectResponse
     */
    public function lock(Check $check)
    {
        if (Auth::user()->can('lock', $check)) {
//            $this->_lockForeignAssessments($check);
            $check->status()->create([
                'state' => 'locked',
                'date' => Carbon::now()->format('Y-m-d')
            ]);

        }

        return redirect()->route('check.index');
    }

    /**
     * @param $check
     */
    private function _lockForeignAssessments($check)
    {
        $runs = (new Run())->where([['check_id', $check->id]])->whereNotNull('invitation_id')->get();
        if ($runs) {
            foreach ($runs as $_run) {
                $_run->end = Carbon::now();
                $_run->save();
            }
        }
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    private function getTags()
    {
        return Auth::user()->tags()->orderBy('name')->get();
    }

    /**
     * @param Check $check
     * @return array
     */
    private function getPhasesByCheck(Check $check)
    {
        $phases = [];
        $iterator = $check->phases()->get();
        if( !$iterator ) { return []; }

        foreach ($iterator as $_phase) {
            if ($_phase->pivot) {
                $phases[$_phase->pivot->sort]['phase'] = $_phase;
                $phases[$_phase->pivot->sort]['phrases'] = $check->phrases()->where('phases_checks_id', $_phase->pivot->id)->get();
            }
        }

        return $phases;
    }
}
