@extends('layouts.app')

@section('title', 'Fremdeinschätzung')

@section('content')
    @include('partials.flash')
    @include('partials.modal')

    @include('partials.content-header', [
        'title' => 'Fremdeinschätzung von ' . $check->user->name,
        'titletext' => 'Schätzen Sie hier auf Grundlage Ihrer Vorerfahrungen oder aktuellen Erlebnisse ein, wie gut Sie / Er die beschriebenen Kompetenzen beherrscht.',
        'divider' => false,
        'help' => Config::get('help.assessment_they'),
    ])

    <div class="ui divider dotted"></div>

    <h2 class="green colored">Beschreibung</h2>

    <form class="ui form assessment" method="GET" action="{{ route('foreign.assessment.complete', ['check' => $check, 'run' => $run]) }}">
        <div class="ui middle aligned grid">
            <div class="row">
                <div class="sixteen wide column">
                    <b>Kurztitel des Checks:</b>
                    {{ $check->title }}
                </div>
            </div>
            <div class="row">
                <div class="sixteen wide column">
                    <b>Verwendungszweck:</b>
                    {{ $check->purpose }}
                </div>
            </div>
            <div class="row">
                <div class="sixteen wide column">
                    <b>Auftragsbeschreibung:</b>
                    {{ $check->description }}
                </div>
            </div>
            <div class="row">
                <div class="sixteen wide column">
                    <b>Schlagwörter:</b>
                    @foreach($check->tags as $checkTag)
                        <div class="ui label">{{ $checkTag->name }}</div>
                    @endforeach
                </div>
            </div>
        </div>

        <div class="ui divider"></div>

        <div class="mb-1">
            <h2 class="green colored d-inline">Kompetenzbeschreibungen</h2><i class="help circle outline icon" data-content="Folgt"></i>
        </div>

        <div class="tabular-menu">
            <?php $tabs = ['1' => ' active', '2' => '', '3' => '', '4' => '']; ?>
            <div class="ui top attached tabular menu">
                @foreach( $tabs as $_index => $_class )
                    @if( isset($phases[$_index]['phase']) && !empty($phases[$_index]['phase']))
                        @if( $phases[$_index]['phrases']->count() > 0 )
                            <a class="item{{ $_class }} one-fourth" data-tab="{{ $_index  }}">
                                {{ $phases[$_index]['phase']->name }}
                                <div class="ui label">{{ $phases[$_index]['phrases']->count() }}</div>
                            </a>
                        @endif
                    @endif
                @endforeach
            </div>
            @foreach( $tabs as $_index => $_class )
                @isset( $phases[$_index]['phrases'] )
                    <div class="ui bottom attached{{ $_class }} tab segment" data-tab="{{ $_index }}">
                        @forelse ($phases[$_index]['phrases'] as $_key => $_phrase)
                            @if(!is_null($_phrase))
                                @include('foreign_assessment.rating', [
                                    'statement' => $_phrase->statement,
                                    'category' => $_phrase->getCategory(),
                                    'tab' => $_index,
                                    'run_phrase' => (isset($phases[$_index]['run_phrases'][$_phrase->id]) ? $phases[$_index]['run_phrases'][$_phrase->id] : (new \App\Models\RunPhrase()) )
                                ])
                            @endif
                        @empty
                        @endforelse
                    </div>
                @endisset
            @endforeach
        </div>
        <div class="fields">
            <div class="sixteen wide field">
                <button type="submit" class="ui secondary button right floated">Einschätzung abschließen</button>
                <button type="submit" class="ui primary button right floated">Einschätzung abschließen</button>
            </div>
        </div>

    </form>
@endsection
