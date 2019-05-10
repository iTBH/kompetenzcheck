<?php

namespace App\Http\Controllers;

use App\Models\Check;
use Barryvdh\Snappy\Facades\SnappyPdf;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\URL;

class EvaluationController extends Controller
{
    public function index(Check $check)
    {
        return view('evaluation.show', ['check' => $check]);
    }

    public function download(Check $check)
    {
        $css = url(mix('/css/app.css'));
        try {
            $pdf = SnappyPdf::loadView('evaluation.pdf', ['check' => $check, 'css' => $css])->setOrientation('landscape');
            $name = str_replace(' ', '_', $check->name) . "_" . Carbon::now()->format('d_m_Y');
            return $pdf->download($name . '.pdf');
        } catch (\Exception $exception) {
            dd($exception);
            session()->flash('status', ['message' => 'Das PDF kann gerade nicht erstellt werden', 'level' => 'error']);
            return redirect()->back();
        }
    }
}
