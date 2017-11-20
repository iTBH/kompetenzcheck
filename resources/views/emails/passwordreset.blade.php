@component('mail::message')
# Passwort zurücksetzen

Hallo {{ $user->name }},

Du erhälst diese Nachricht, da wir von Dir eine Anfrage zum Zurücksetzen Deines Passworts erhalten haben.
@component('mail::button', ['url' => route('password.reset', $token), 'color' => 'green'])
    Passwort zurücksetzen
@endcomponent
Solltest Du keine Anfrage aufgegeben haben, kannst Du diese Nachricht ignorieren.

Grüße von der Kompetenzwerkstatt - Mein Beruf
@endcomponent
