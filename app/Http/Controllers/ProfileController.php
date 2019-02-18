<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function index()
    {
        return view('profile.index', ['user' => Auth::user()]);
    }

    public function edit()
    {
        return view('profile.edit', ['user' => Auth::user()]);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'name' => 'required',
            'date_of_birth' => 'date_format:"d.m.Y"',
            'picture' => 'max:10240|mimes:jpeg,png,jpg,gif'
        ]);

        $user = Auth::user();
        if (($request->has('picture_delete') && boolval($request->get('picture_delete'))) || $request->hasFile('picture')) {
            $user->getFirstMedia('picture')->delete();
        }

        if ($request->hasFile('picture')) {
            $user->addMediaFromRequest('picture')->toMediaCollection('picture');
        }

        $data = $request->only(['name', 'profession', 'location_of_birth', 'street', 'city', 'phone', 'education']);
        $data['date_of_birth'] = $request->date_of_birth ? Carbon::createFromFormat('d.m.Y', $request->date_of_birth) : null;
//        $data['training_date_from'] = $request->training_date_from ? Carbon::createFromFormat('d.m.Y', $request->training_date_from) : null;
//        $data['training_date_to'] = $request->training_date_to ? Carbon::createFromFormat('d.m.Y', $request->training_date_to) : null;

        Auth::user()->update($data);

        $request->session()->flash('status', ['message' => 'Das Profil wurde erfolgreich gespeichert.', 'level' => 'success']);

        return redirect()->route('profile.index');
    }
}
