@extends('layouts.app')

@section('title', 'Dashboard')

@section('content')
    <div class="dashboard-container">

    @include('partials.flash')

    @include('partials.content-header', [
        'title' => ' Checks_Überblick',
        'titletext' => 'Ihre Checks im Überblick: Hier erstellen, verwalten und führen Sie Checks durch.',
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
    </div>
@endsection
