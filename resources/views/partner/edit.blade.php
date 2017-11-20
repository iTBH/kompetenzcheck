@extends('layouts.app')

@section('title', 'Partner und Partnerinnen')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => $partner->lastname . ", " . $partner->firstname
    ])

    <form method="POST" action="{{ route('partner.update', $partner->id) }}" class="ui form">
        {{ csrf_field() }}
        {{ method_field("put") }}

        <div class="fields">
            <div class="sixteen wide field">
                <label for="firstname">Vorname:</label>
                <input type="text" id="firstname" name="firstname" value="{{ $partner->firstname }}">
            </div>
        </div>

        <div class="fields">
            <div class="sixteen wide field">
                <label for="lastname">Nachname:</label>
                <input type="text" id="lastname" name="lastname" value="{{ $partner->lastname }}">
            </div>
        </div>

        <div class="fields">
            <div class="sixteen wide field">
                <label for="email">E-Mail-Adresse:</label>
                <input type="email" id="email" name="email" value="{{ $partner->email }}">
            </div>
        </div>


        <div class="fields">
            <div class="sixteen wide field">
                <button type="submit" class="ui primary button">Speichern</button>
            </div>
        </div>
    </form>
@endsection
