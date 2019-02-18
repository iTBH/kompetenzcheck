<?php

namespace App\Http\Controllers;

use App\Helper\ShareHelper;
use App\Models\Check;
use App\Models\PhasesCheck;
use App\Models\Phrase;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ImportController extends Controller
{
    public function index()
    {
        return response()->json([
            'modal' => [
                'header' => '<h1>Check importieren</h1>',
                'content' => view('import.index')->render(),
                'actions' => view('import.actions.create')->render()
            ]
        ]);
    }

    public function store(Request $request)
    {
        $checknumber = $request->get('checknumber-import');
        $importCheck = (new Check())->where('share_key', $checknumber)->first();
        if ($importCheck) {
            $newCheck = $importCheck->replicate();
            $newCheck->title .= " (Importiert)";
            $newCheck->user_id = Auth::user()->id;
            $newCheck->share_key = (new ShareHelper())->getUniqueShareKey();
            $newCheck->created_by = "import";
            $newCheck->save();

            foreach ($importCheck->phasesChecks as $phasesCheck) {
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

            foreach ($importCheck->tags as $tag) {
                $newCheck->tags()->attach($tag);
            }

            session()->flash('status', ['message' => 'Check wurde erfolgreich importiert.', 'level' => 'success']);
            return response()->json([
                'error' => false,
                'route' => route('check.edit', [$newCheck->id])
            ]);
        }

        return response()->json([
            'error' => true,
            'message' => 'Angegebene Checknummer nicht verfügbar.'
        ]);
    }
}
