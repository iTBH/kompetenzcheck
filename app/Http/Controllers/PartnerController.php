<?php

namespace App\Http\Controllers;

use App\Models\Partner;
use Auth;
use Illuminate\Http\Request;
use Validator;

class PartnerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $partners = (new Partner())->getPartner()->get();

        return view('partner.index', ['partners' => $partners]);
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
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
        ]);

        Auth::user()->partners()->create($request->all());

        return redirect()->route('partner.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Partner $partner
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function edit(Partner $partner)
    {
        if (Auth::user()->can('edit', $partner)) {

            return view('partner.edit', ['partner' => $partner]);
        }

        return redirect()->route('partner.index');
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param Partner $partner
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function update(Request $request, Partner $partner)
    {
        if (Auth::user()->can('update', $partner)) {

            $this->validate($request, [
                'firstname' => 'required',
                'lastname' => 'required',
                'email' => 'required|email',
            ]);

            $partner->update($request->all());
        }

        return redirect()->route('partner.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Partner $partner
     * @return \Illuminate\Http\Response
     * @internal param int $id
     */
    public function destroy(Partner $partner)
    {
        if (Auth::user()->can('delete', $partner)) {
            $partner->delete();
        }

        return redirect()->route('partner.index');
    }
}
