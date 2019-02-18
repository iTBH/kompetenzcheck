@component('mail::message')
# Sie haben eine Einladung zu einer Fremdeinschätzung erhalten.

Hallo {{ $invitation->firstname }},

Ihnen wurde eine Fremdeinschätzung von {{ $invitation->check->user->name }} zugestellt. Um diese Einschätzung durchführen zu können, öffnen Sie bitte folgenden Link

@component('mail::button', ['url' => route('foreign.assessment.execute', ['url_hash' => $invitation->url_hash]), 'color' => 'green'])
Fremdeinschätzung durchführen
@endcomponent

Das Team des Kompetenz-Checks
@endcomponent
