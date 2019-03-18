<h5 class="green colored">
    Aktionsmöglichkeiten
</h5>

<!-- Help -->
{{--<a target="_blank" href="{{ config('help.check') }}" class="help-button ui small secondary button" style="margin-left: 40px">Hilfe</a>--}}

<!-- Divider -->
<div class="ui divider dotted"></div>

<!-- Dynamic Buttons -->
<div class="dynamic button">
    <!-- Zuweisung annehmen und ablehnen -->
    @if($check->allow_assignment == false && $check->created_by == 'assigned')
        <a href="{{route('check.assign.allow', $check->id)}}" class="ui icon button" data-content="Importieren Sie den Ihnen zugewiesenen Check in Ihr Profil.">
            <i class="plus outline icon"></i> Check annehmen
        </a>
        <a href="{{route('check.assign.decline', $check->id)}}" class="ui icon button" data-content="Lehnen Sie den zugewiesenen Check ab.">
            <i class="ban outline icon"></i> Check ablehnen
        </a>
    @elseif(!$check->getAnonymisedStatus())
        @if(!$check->getLockedStatus())
        <!-- Selbsteinschätzung vornehmen -->
            @if($check->runs()->where('type', 'me')->count() == 2)
                <a href="{{ route('assessment.index', ['check' => $check]) }}" class="ui icon button"
                   data-content="Bearbeiten Sie Ihre zweite Selbsteinschätzung auf Basis Ihrer aktuell gesammelten Erfahrungen durch.">
                    <i class="circle icon"></i> 2. Selbsteinschätzung bearbeiten
                </a>
            @elseif($check->runs()->where('type', 'me')->whereNotNull('end')->count() < 1)
                <a href="{{ route('assessment.index', ['check' => $check]) }}" class="ui icon button"
                   data-content="Führen Sie eine erste Selbsteinschätzung auf Basis Ihrer Vorerfahrungen durch.">
                    <i class="circle icon"></i> 1. Selbsteinschätzung durchführen
                </a>
            @elseif($check->runs()->where('type', 'me')->whereNotNull('end')->count() == 1)
                <a href="{{ route('assessment.index', ['check' => $check]) }}" class="ui icon button"
                   data-content="Führen Sie eine weitere Selbsteinschätzung auf Basis Ihrer aktuell gesammelten Erfahrungen durch.">
                    <i class="circle icon"></i> 2. Selbsteinschätzung durchführen
                </a>
            @endif
        @endif
    <!-- Fremdeinschätzung einladen -->
        @if(!$check->getLockedStatus() && $check->runs()->where('type', 'me')->whereNotNull('end')->count() > 0 && $check->runs->where('type', 'they')->count() < 2)
            <a href="#" class="ui icon button check-foreign-assessment-btn" data-url="{{route('foreign_assessment.invite', $check->id, false)}}"
               data-content="Laden Sie Jemanden dazu ein, Ihren Kompetenzstand einzuschätzen.">
                @if($check->runs->where('type', 'they')->count() == 0)
                    <i class="mail outline icon"></i> Jemanden zur Fremdeinschätzung einladen
                @elseif($check->runs->where('type', 'they')->count() == 1)
                    <i class="mail outline icon"></i> Jemanden zu einer weiteren Fremdeinschätzung einladen
                @endif
            </a>
        @endif
        @if($check->runs()->whereNotNull('end')->count() == 0 && !$check->getLockedStatus())
        <!-- Check zuweisen -->
            <a href="#" class="ui icon button check-assign-btn" data-url="{{route('check.assign.index', $check->id, false)}}" data-content="Weisen Sie den Check einer anderen Person zu.">
                <i class="mail outline icon"></i> Check zuweisen
            </a>
        @endif
    <!-- Check schließen - Auswertung beginnen -->
        @if($check->runs()->whereNotNull('end')->count() > 0 && !$check->getLockedStatus())
            <a href="{{route('check.lock', $check->id)}}" class="ui icon button check-assign-btn"
               data-content="Beenden Sie den Check, wenn alle Einschätzungen abgeschlossen sind.">
                <i class="lock outline icon"></i> Check abschließen: Auswertung starten
            </a>
        @endif
        @if($check->getLockedStatus())
        <!-- Auswertung ansehen -->
            <a href="{{route('check.evaluation', $check->id)}}" class="ui icon button check-assign-btn"
               data-content="Reflektieren Sie die Ergebnisse des Kompetenz-Checks, z. B. in einem Auswertungsgespräch.">
                <i class="signal outline icon"></i> Auswertung betrachten
            </a>
            <!-- Check annonymisieren -->
            <a href="{{route('check.anonymize', $check->id)}}" class="ui icon button check-assign-btn"
               data-content="Beenden Sie den Check im Anschluss an das Auswertungsgespräch und löschen Sie alle personenbezogenen Daten.">
                <i class="graduation outline icon"></i> Daten löschen
            </a>
        @endif
    @endif
</div>