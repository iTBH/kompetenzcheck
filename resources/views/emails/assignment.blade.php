@component('mail::message')
    # Neu zugewiesener Check

    Hallo {{ $partner->firstname }},

    @if(!$shareKey)
        Ihnen wurde ein Check zugewiesen. Melden Sie sich im Kompetenz-Check an, um den Check anzunehmen.
    @else
        Ihnen wurde ein Check zugewiesen. Melden Sie sich im Kompetenz-Check an und importieren Sie den Check mit der Nummer "{{$shareKey}}".
    @endif

    Das Team des Kompetenz-Checks
@endcomponent
