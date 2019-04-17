@extends('layouts.app')

@section('title', 'Check anlegen')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Check_erstellen',
        'titletext' => 'Legen Sie hier einen Check an. Ein Check besteht aus der Beschreibung des Kontexts (Auftrag), dem Verwendungszweck und den Kompetenzbeschreibungen.',
        'divider' => false,
        'help' => Config::get('help.check_create'),
    ])

    <div class="ui divider dotted"></div>

    <h2 class="green colored">Beschreibung</h2>

    <form method="POST" action="{{ route('check.store') }}" class="ui form">
        {{ csrf_field() }}
        @include('checks._form')
    </form>

    @include('partials.modal')

@endsection
