@extends('layouts.app')

@section('title', 'Check ansehen')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Ansicht des Checks',
        'divider' => false,
        'help' => Config::get('/'),

        'edit' => route('check.edit', ['check' => $check]),
    ])

    <p>
        Sehen Sie hier Ihren Kompetenz-Check. Dieser umfasst eine ausführliche Beschreibung des Arbeitsauftrags und zugehörige Kompetenzbeschreibungen.
    </p>

    <div class="ui middle aligned grid">
        <div class="row">
            <div class="four wide column">
                <label>Kurztitel des Checks:</label>
            </div>
            <div class="six wide column">
                {{ $check->title }}
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label>Verwendungszweck:</label>
            </div>
            <div class="six wide column">
                {{ $check->purpose }}
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label>Auftragsbeschreibung:</label>
            </div>
            <div class="six wide column">
                {{ $check->description }}
            </div>
        </div>
        <div class="row">
            <div class="four wide column">
                <label>Schlagwörter:</label>
            </div>
            <div class="six wide column">
                @foreach($check->tags as $checkTag)
                    <a href="{{ route('tags.show', $checkTag->id) }}" class="ui label">{{ $checkTag->name }}</a>
                @endforeach
            </div>
        </div>
    </div>

    <div class="ui divider"></div>
    <h2 class="green colored">Kompetenzbeschreibungen</h2>
    <?php $tabs = ['1' => ' active', '2' => '', '3' => '', '4' => '']; ?>
    <div class="ui top attached tabular menu">
        @foreach( $tabs as $_index => $_class )
            @if( isset($phases[$_index]['phase']) && !empty( $phases[$_index]['phase']->name ) )
                <a class="item{{ $_class }} one-fourth" data-tab="{{ $_index  }}">
                    {{ $phases[$_index]['phase']->name }}
                </a>
            @endif
        @endforeach
    </div>
    @foreach( $tabs as $_index => $_class )
        <div class="ui bottom attached{{ $_class }} tab segment" data-tab="{{ $_index }}">
            @isset( $phases[$_index]['phrases'] )
                @forelse ($phases[$_index]['phrases'] as $_phrase)
                    @include('checks.phrase.item', [
                        'statement' => $_phrase->statement,
                        'category' => $_phrase->getCategory(),
                        'tab' => $_index
                    ])
                @empty
                @endforelse
            @endisset
        </div>
    @endforeach
@endsection
