@extends('layouts.app')

@section('title', 'Passwort zurücksetzen')
@section('content-width', 'small')

@section('content')
    @include('partials.flash')
    <h1>Passwort zurücksetzen</h1>
    <p>
        Geben Sie hier Ihre E-Mail-Adresse ein, mit der Sie sich registriert haben. Sie erhalten dann eine E-Mail, mit
        der Sie Ihr Passwort zurücksetzen können.
    </p>
    <form class="ui form" method="POST" action="{{ route('password.email') }}">
        {{ csrf_field() }}
        <div class="field {{ $errors->has('email') ? 'error' : null }}">
            <input type="text" name="email" placeholder="E-Mail" required autofocus value="{{ old('email') }}">
        </div>
        <div class="field">
            <button type="submit" class="ui primary button">E-Mail senden</button>
        </div>
    </form>
@endsection
