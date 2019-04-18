@extends('layouts.app')

@section('title', 'Anmelden')
@section('content-width', 'small')

@section('content')
    @include('partials.flash')
    <h1>Registrieren</h1>
    <p>
        Wir haben Ihnen eine E-Mail mit einem Bestätigungslink geschickt.<br/>
        Bitte bestätigen Sie über den Link Ihre E-Mail-Adresse, um die Registrierung abzuschließen.
    </p>
    <div class="ui divider dotted"></div>
    <p>
        <a href="{{ route('login') }}">Zurück zum Login</a>
    </p>
@endsection
