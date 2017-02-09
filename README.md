# Kompetenzcheck

## Installation des Kompetenzchecks
Zum Installieren des Kompetenzchecks, speichern Sie zunächst die [`docker-compose.yml`](https://github.com/iTBH/kompetenzcheck/blob/master/docker-compose.yml) in einem neuen Verzeichnis und öffnen Sie sie in einem Texteditor. Passen Sie nun die SMTP Konfiguration an, um einen E-Mailversand zu gewährleisten.

Beispiel: Gmail
```yml
- SMTP_HOST=smtp.gmail.com
- SMTP_PORT=587
- SMTP_USER=meine-email-adresse@gmail.com
- SMTP_PASSWORD=meinsicherespasswort
```
Beispiel: WEB.DE
```yml
- SMTP_HOST=smtp.web.de
- SMTP_PORT=587
- SMTP_USER=meine-email-adresse@web.de
- SMTP_PASSWORD=meinsicherespasswort
```

Anschließend öffnen Sie die Eingabeaufforderung, navigieren in ihr ausgewähltes Verzeichnis und starten das Dockerprojekt mit den folgenden Befehlen:
```
C:\Users\Benutzer>cd kompetenzcheck
C:\Users\Benutzer\kompetenzcheck>docker-compose up -d
```
Nach einigen Sekunden können Sie nun das Kompetenzcheck-Tool im Browser unter der Adresse http://127.0.0.1/ erreichen.

## Notes

Diese Datei wurde am 09.02.2017 geändert, um den automatischen Build bei DockerHub zu testen.
