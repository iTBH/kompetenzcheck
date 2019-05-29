@component('mail::message')
# Registrierung

Hallo {{ $user->name }},

vielen Dank für Ihre Registrierung im Kompetenz-Check.
Um Ihre Registrierung abzuschließen, klicken Sie bitte auf folgenden Link:
@component('mail::button', ['url' => route('register.verify', $user->email_token), 'color' => 'green'])
Registrierung bestätigen
@endcomponent

Wir wünschen Ihnen viel Spaß mit dem Kompetenz-Check.<br>
Nutzen Sie die Hilfe- und FAQ-Seiten für Ihre ersten Schritte in der Anwendung.<br><br>

Grüße vom Team des Kompetenz-Checks
@endcomponent
