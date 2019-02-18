@component('mail::message')
# Sie haben eine Einladung zu einer Fremdeinschätzung erhalten.

Hallo {{ $invitation->firstname }},

der Check, zu dem Sie von {{ $invitation->check->user->name }} eingeladen wurden, ist nun abgeschlossen. Eine weitere Teilnahme kann nicht mehr berücksichtigt werden.

Bitte vereinbaren Sie zur Durchführung des Auswertungsgesprächs einen Termin mit {{ $invitation->check->user->name }}.

Das Team des Kompetenz-Checks
@endcomponent
