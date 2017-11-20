@extends('layouts.app')

@section('title', 'Auswertung des Checks')

@section('content')
    @include('partials.flash')
    @include('partials.modal')

    @include('partials.content-header', [
        'title' => 'Auswertung des Checks',
        'divider' => true,
        'help' => Config::get('help.evaluation'),
        'custombutton' => route('check.evaluation.download',[$check->id]),
        'customtext' => 'PDF erstellen',
        'customclass' => '',
        'customicon' => 'file pdf outline',
        'customtarget' => '_blank'
    ])

    <div class="evaluation-container">
        <p>
            Hier sehen Sie die Auswertung des durchgeführten Kompetenz-Checks. Führen Sie auf Grundlage der Ergebnisse z. B. ein Auswertungsgespräch. Die Hilfefunktion unterstützt Sie dabei.
        </p>
        <div class="ui stackable middle aligned grid">
            <div class="row">
                <div class="four wide column">
                    <label>Kurztitel des Checks</label>
                </div>
                <div class="six wide column">
                    {{ $check->title }}
                </div>
            </div>
            <div class="row">
                <div class="four wide column">
                    <label>Verwendungszweck</label>
                </div>
                <div class="six wide column">
                    {{ $check->purpose }}
                </div>
            </div>
            <div class="row">
                <div class="four wide column">
                    <label>Auftragsbeschreibung</label>
                </div>
                <div class="six wide column">
                    {{ $check->description }}
                </div>
            </div>
            @if($check->tags->count() > 0)
                <div class="row">
                    <div class="four wide column">
                        <label>Schlagwörter</label>
                    </div>
                    <div class="six wide column">
                        @foreach($check->tags as $checkTag)
                            <a href="#" class="ui label">{{ $checkTag->name }}</a>
                        @endforeach
                    </div>
                </div>
            @endif
        </div>
        <div class="ui divider"></div>
        <h2 class="green colored">Prozessansicht des Checks</h2>
        <p>
            Die Prozessansicht zeigt Ihnen alle im Check durchgeführten Einschätzungen im Durchschnitt pro Kompetenzdimension an. Nutzen Sie die Prozessansicht für einen ersten Überblick und als
            Einstieg
            in die Auswertung des Checks.
        </p>
        <div class="process-view">
            @php ($colWidth = (int)(100 / ($check->phasesChecks->count() + 1) / 2))
            @php ($colWidthDouble = (int)100 / ($check->phasesChecks->count() + 1))
            <table style="min-width: {{ $check->phasesChecks->count() * 240 + 87 }}px">
                <colgroup>
                    <col width="{{ $colWidthDouble }}%">
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <col width="{{ $colWidth }}%">
                            <col width="{{ $colWidth }}%">
                        @endif
                    @endforeach
                </colgroup>
                <tbody>
                <tr>
                    <td></td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <td colspan="2"><strong>{{ $phase->phase->name }}</strong></td>
                        @endif
                    @endforeach
                </tr>
                <tr>
                    <td>
                        <div class="stars stars-4"></div>
                        <div class="star-text">
                            Ich kann das sehr gut und<br/> brauche keine weitere<br/> Unterstützung
                        </div>
                    </td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <td></td>
                            <td></td>
                        @endif
                    @endforeach
                </tr>
                <tr>
                    <td>
                        <div class="stars stars-3"></div>
                        <div class="star-text">
                            Ich kann das schon relativ<br/> gut und brauche nur noch<br/> wenig Unterstützung
                        </div>
                    </td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <td></td>
                            <td></td>
                        @endif
                    @endforeach
                </tr>
                <tr>
                    <td>
                        <div class="stars stars-2"></div>
                        <div class="star-text">
                            Ich kann das ein bisschen<br/> und brauche noch relativ<br/> viel Unterstützung
                        </div>
                    </td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <td></td>
                            <td></td>
                        @endif
                    @endforeach
                </tr>
                <tr>
                    <td>
                        <div class="stars stars-1"></div>
                        <div class="star-text">
                            Ich kann das noch nicht <br/> und brauche umfassende<br/> Unterstützung
                        </div>
                    </td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)

                            @php ($meSumF = 0)
                            @php ($meCountF = 0)
                            @php ($meSumP = 0)
                            @php ($meCountP = 0)
                            @php ($theySumF = 0)
                            @php ($theyCountF = 0)
                            @php ($theySumP = 0)
                            @php ($theyCountP = 0)

                            @foreach($phase->phrases as $phrase)
                                @foreach($phrase->runPhrases as $runPhrase)
                                    @if($runPhrase->run->type == "me" && $phrase->category->name == "Fachkompetenz")
                                        @php ($meSumF += $runPhrase->rating)
                                        @php ($meCountF++)
                                    @elseif($runPhrase->run->type == "they" && $phrase->category->name == "Fachkompetenz")
                                        @php ($theySumF += $runPhrase->rating)
                                        @php ($theyCountF++)
                                    @elseif($runPhrase->run->type == "me" && $phrase->category->name == "Personale Kompetenz")
                                        @php ($meSumP += $runPhrase->rating)
                                        @php ($meCountP++)
                                    @elseif($runPhrase->run->type == "they" && $phrase->category->name == "Personale Kompetenz")
                                        @php ($theySumP += $runPhrase->rating)
                                        @php ($theyCountP++)
                                    @endif
                                @endforeach
                            @endforeach
                            <td>
                                <div class="bar bar-green bar-left" style="height: calc((100% + 2px) * {{ $meCountP != 0 ? $meSumP / $meCountP : 0 }})"><span>Ich</span></div>
                                <div class="bar bar-light-green bar-right" style="height: calc((100% + 2px) * {{ $theyCountP != 0 ? $theySumP / $theyCountP : 0 }})"><span>Andere/r</span></div>
                            </td>
                            <td>
                                <div class="bar bar-blue bar-left" style="height: calc((100% + 2px) * {{ $meCountF != 0 ? $meSumF / $meCountF : 0 }})"><span>Ich</span></div>
                                <div class="bar bar-light-blue bar-right" style="height: calc((100% + 2px) * {{ $theyCountF != 0 ? $theySumF / $theyCountF : 0 }})"><span>Andere/r</span></div>
                            </td>
                        @endif
                    @endforeach
                </tr>
                <tr>
                    <td></td>
                    @foreach($check->phasesChecks as $phase)
                        @if($phase->phrases->count() > 0)
                            <td>
                                <br/>
                                <img class="comp-icon comp-left" src="{{url('\images\s-green.svg')}}">
                                <img class="comp-icon comp-right" src="{{url('\images\s-light-green.svg')}}"><br/>
                                Personale<br/>
                                Kompezent
                            </td>
                            <td>
                                <br/>
                                <img class="comp-icon comp-left" src="{{url('\images\f-blue.svg')}}">
                                <img class="comp-icon comp-right" src="{{url('\images\f-light-blue.svg')}}"><br/>
                                Fach-<br/>
                                kompetenz
                            </td>
                        @endif
                    @endforeach
                </tr>
                </tbody>
            </table>
        </div>
        <div class="ui divider"></div>
        <h2 class="green colored">Detailansicht des Checks</h2>
        <p>
            Hier sehen Sie die detaillierte Darstellung der Einschätzungen pro Prozessphase, Kompetenzdimension und mit Ihren Kommentaren.
        </p>
        @foreach($check->phasesChecks as $phase)
            @if($phase->phrases->count() > 0)
                <h4>{{$phase->phase->name}}</h4>
                <div class="ui grid">
                    @foreach($phase->phrases->sortBy('category') as $phrase)
                        <div class="result-box">
                            <h5><i class="icon {{$phrase->category->icon}}"></i>{{$phrase->statement}}</h5>
                            @foreach($phrase->runPhrases->sortBy('start') as $runPhrase)
                                <div class="run-phrase-row">
                                    @if($runPhrase->run->type == "me")
                                        <span class="count-column">
                                        @if($check->runs->sortBy('start')->first() == $runPhrase->run)
                                                <img src="{{url('\images\evaluation\count-1.png')}}" alt="count">
                                            @elseif($check->runs->sortByDesc('start')->first() == $runPhrase->run)
                                                <img src="{{url('\images\evaluation\count-2.png')}}" alt="count">
                                            @endif
                                            <b>Ich:</b> Meine Selbsteinschätzung
                                    </span>
                                    @else
                                        <span>
                                    <b>Andere/r:</b> Fremdeinschätzung von {{$runPhrase->run->invitation->email}}
                                </span>
                                    @endif
                                    <div class="rating-container">
                                        <div class="rating-box">
                                            <div class="rating rating-{{$runPhrase->rating}}">
                                                @if($runPhrase->run->type == "me" && $phrase->category->name == "Fachkompetenz")
                                                    <div class="border own-subject-competence"></div>
                                                @elseif($runPhrase->run->type == "they" && $phrase->category->name == "Fachkompetenz")
                                                    <div class="border ext-subject-competence"></div>
                                                @elseif($runPhrase->run->type == "me" && $phrase->category->name == "Personale Kompetenz")
                                                    <div class="border own-personal-competence"></div>
                                                @elseif($runPhrase->run->type == "they" && $phrase->category->name == "Personale Kompetenz")
                                                    <div class="border ext-personal-competence"></div>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    @if($runPhrase->comment)
                                        <div class="comment">Kommentar: {{$runPhrase->comment}}</div>
                                    @endif
                                </div>
                            @endforeach
                        </div>
                    @endforeach
                </div>
                <div class="ui divider dotted"></div>
            @endif
        @endforeach
    </div>
@endsection
