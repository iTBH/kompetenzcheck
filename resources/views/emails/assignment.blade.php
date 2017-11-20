@component('mail::message')
    # Neu zugewiesener Check

    Hallo {{ $partner->firstname }},

    @if(!$shareKey)
        dir wurde ein neuer Check zugewiesen. Melde dich nun an und schau dir den Check an.
    @else
        dir wurde ein neuer Check zugewiesen.
        Registriere dich nun und importiere dir den Check mit der Nummer "{{$shareKey}}".
    @endif

    Grüße von der Kompetenzwerkstatt - Mein Beruf
@endcomponent
