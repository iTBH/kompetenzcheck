<!DOCTYPE html>
<html lang="{{ config('app.locale') }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Kompetenzcheck</title>
    <link rel="stylesheet" href="{{ $css }}">
</head>
<body>

<h2 class="green colored">Beschreibung</h2>

<div class="pdf-evaluation-container">
    <h2 class="green colored">Auswertung des Checks</h2>
    <p>
        Hier sehen Sie die Auswertung des durchgeführten Kompetenz-Checks. Führen Sie auf Grundlage der Ergebnisse z. B.
        ein Auswertungsgespräch. Die Hilfefunktion unterstützt Sie dabei.
    </p>

    <table class="result-table">
        <tr>
            <td><b>Kurztitel des Checks:</b></td>
            <td>{{ $check->title }}</td>
        </tr>
        <tr>
            <td><b>Verwendungszweck:</b></td>
            <td>{{ $check->purpose }}</td>
        </tr>
        <tr>
            <td><b>Auftragsbeschreibung:</b></td>
            <td>{{ $check->description }}</td>
        </tr>
        @if($check->tags->count() > 0)
            <tr>
                <td><b>Schlagwörter</b></td>
                <td>
                    @foreach($check->tags as $checkTag)
                        <a href="#" class="ui label">{{ $checkTag->name }}</a>
                    @endforeach
                </td>
            </tr>
        @endif
    </table>
    <h2 class="green colored">Prozessansicht des Checks</h2>
    <p>
        Die Prozessansicht zeigt Ihnen alle im Check durchgeführten Einschätzungen im Durchschnitt pro
        Kompetenzdimension an. Nutzen Sie die Prozessansicht für einen ersten Überblick und als
        Einstieg
        in die Auswertung des Checks.
    </p>
    <div class="process-view">
        @php ($colWidth = (int)(100 / ($check->phasesChecks->count() + 1) / 2))
        @php ($colWidthDouble = (int)100 / ($check->phasesChecks->count() + 1))
        <table>
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

                        @php ($meHeightP = ((62) * ($meCountP != 0 ? $meSumP / $meCountP : 0 )))
                        @php ($meHeightF = ((62) * ($meCountF != 0 ? $meSumF / $meCountF : 0 )))
                        @php ($theyHeightP = ((62) * ($theyCountP != 0 ? $theySumP / $theyCountP : 0 )))
                        @php ($theyHeightF = ((62) * ($theyCountF != 0 ? $theySumF / $theyCountF : 0 )))

                        <td>
                            <div class="bar bar-green bar-left" style="height: {{$meHeightP}}px;"><span>Ich</span></div>
                            <div class="bar bar-light-green bar-right" style="height: {{$theyHeightP}}px;"><span>Andere/r</span>
                            </div>
                        </td>
                        <td>
                            <div class="bar bar-blue bar-left" style="height:{{$meHeightF}}px;"><span>Ich</span></div>
                            <div class="bar bar-light-blue bar-right" style="height:{{$theyHeightF}}px;">
                                <span>Andere/r</span></div>
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
                            Kompetenz
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
    @foreach($check->phasesChecks as $phase)
        @if($phase->phrases->count() > 0)
            @if($loop->first)
                <div class="page_break"></div>
                <h2 class="green colored">Detailansicht des Checks</h2>
                <p>
                    Hier sehen Sie die detaillierte Darstellung der Einschätzungen pro Prozessphase, Kompetenzdimension
                    und mit Ihren Kommentaren.
                </p>
            @endif
            <h4>{{$phase->phase->name}}</h4>
            @foreach($phase->phrases->sortBy('category')->chunk(2) as $phrasePageArray)
                @foreach($phrasePageArray as $phrase)
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
                @if(!$loop->parent->last)
                    <div class="page_break">&nbsp;</div>
                @endif
            @endforeach
        @endif
    @endforeach
</div>
</body>
</html>