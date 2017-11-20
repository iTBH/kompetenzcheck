@component('mail::message')
# Sie haben eine Einladung zu einer Fremdeinschätzung erhalten.

Hallo {{ $invitation->firstname }},

dir wurde eine Einladung von {{ $invitation->check->user->name }} zu einer Fremdeinschätzung zugestellt.
Um diese Einschätzung durchführen zu können, öffne bitte den folgenden Link

@component('mail::button', ['url' => route('foreign.assessment.execute', ['url_hash' => $invitation->url_hash]), 'color' => 'green'])
Fremdeinschätzung durchführen
@endcomponent

Grüße von der Kompetenzwerkstatt - Mein Beruf
@endcomponent
