@extends('layouts.app')

@section('title', 'Check anlegen')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Check anlegen',
        'divider' => false,
        'help' => Config::get('help.check_create'),
    ])

    <p>
        Legen Sie hier einen Kompetenz-Check an. Dieser umfasst eine ausführliche Beschreibung des Arbeitsauftrags und zugehörige Kompetenzbeschreibungen.
    </p>

    <form method="POST" action="{{ route('check.store') }}" class="ui form">
        {{ csrf_field() }}
        @include('checks._form')
    </form>

    @include('partials.modal')

@endsection
