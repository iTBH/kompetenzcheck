<?php

namespace App\Http\Controllers;

use Auth;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('dashboard.index', [
            'checks' => Auth::user()->checks()->orderBy('created_at', 'DESC')->paginate(10)
        ]);
    }
}
