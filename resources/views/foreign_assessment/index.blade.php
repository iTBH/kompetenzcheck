@extends('layouts.app')

@section('title', 'Fremdeinschätzung')

@section('content')
    @include('partials.flash')
    @include('partials.modal')

    @include('partials.content-header', [
        'title' => 'Fremdeinschätzung von ' . $check->user->name,
        'titletext' => 'Schätzen Sie auf Grundlage Ihrer Vorerfahrungen, Beobachtungen oder aktuellen Erlebnisse ein, wie gut Er/Sie die beschriebenen Kompetenzen beherrscht.',
        'divider' => false,
        'help' => Config::get('help.assessment_they'),
    ])

    <div class="ui divider dotted"></div>

    <form class="ui form" method="GET" action="{{ route('foreign.assessment.complete', ['check' => $check, 'run' => $run]) }}">
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
                        <div class="ui label">{{ $checkTag->name }}</div>
                    @endforeach
                </div>
            </div>
        </div>

        <div class="ui divider"></div>
        <h2 style="display: inline-block;" class="green colored">Kompetenzbeschreibungen</h2><h2 style="display: inline-block;"><i class="help circle outline icon" data-content="Fügen Sie hier Kompetenzen hinzu. Sie können die Kompetenzen bis zu vier Phasen (Reitern) zuordnen, um Lern- bzw. Arbeitsprozesse abzubilden oder das Kompetenzprofil zu gliedern."></i></h2>
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
        <div class="ui divider"></div>
        <div class="fields">
            <div class="sixteen wide field text-right">
                <button type="submit" class="ui primary button">Speichern</button>
            </div>
        </div>

    </form>
@endsection
