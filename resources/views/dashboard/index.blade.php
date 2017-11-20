@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Checks im Überblick',
        'divider' => true,

        'create' => route('check.create'),
        'addtext' => 'Check erstellen',

        'custombutton' => 'javascript:void(0);',
        'customtext' => 'Check importieren',
        'customicon' => 'upload',
        'customclass' => 'check-import-btn',

        'help' => Config::get('help.dashboard'),
    ])

    <!-- ToDo: Include Navigation here! -->

    @include('checks.partials._checkslist', ['checks' => $checks])

    @include('partials.modal')

@endsection
