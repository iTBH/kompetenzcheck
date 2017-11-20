# Kompetenzcheck

## Installation

1. Git Repository klonen:
```
$ git clone https://github.com/iTBH/kompetenzcheck.git
$ cd kompetenzcheck/
```

2. Kompetenzcheck Docker Image erstellen (kann zwischen 10 - 15 Minuten dauern):
```
$ docker-compose build
```

3. Container abgekoppelt (-d) starten. Hinweis: Vorher überprüfen, dass kein weiterer Webserver auf Port 80 lauscht:
```
$ docker-compose up -d
```

5. Kompetenzcheck im Browser öffnen: http://localhost/


5. MailHog im Browser öffnen um Bestätigunsmails abzufangen: http://localhost:8025/