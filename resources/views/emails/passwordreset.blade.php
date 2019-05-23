@component('mail::message')
# Passwort zurücksetzen

Hallo {{ $user->name }},

Sie erhalten diese Nachricht, da wir von Ihnen eine Anfrage zum Zurücksetzen Ihres Passworts erhalten haben.
@component('mail::button', ['url' => route('password.reset', $token), 'color' => 'green'])
    Passwort zurücksetzen
@endcomponent
Sollten Sie keine Anfrage aufgegeben haben, können Sie diese Nachricht ignorieren.

Grüße vom Team des Kompetenz-Checks
@endcomponent
