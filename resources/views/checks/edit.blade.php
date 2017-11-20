@extends('layouts.app')

@section('title', 'Check bearbeiten')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Check bearbeiten',
        'divider' => false,
        'help' => Config::get('help.check_create'),
    ])

    <p>
        Legen Sie hier einen Kompetenz-Check an. Dieser umfasst eine ausführliche Beschreibung des Arbeitsauftrags und zugehörige Kompetenzbeschreibungen.
    </p>

    <form method="POST" action="{{ route('check.update', ['check' => $check]) }}" class="ui form">
        {{ csrf_field() }}
        {{ method_field('PUT') }}
        @include('checks._form')
    </form>

    @include('partials.modal')

@endsection
