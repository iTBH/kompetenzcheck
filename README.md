# Kompetenzcheck

Logfiles:
http://floki.rz.tuhh.de/MwCsGkNQNeQ4LcT47UrLVGfkHeCC3qWvtGRVxT48cDYzcKSqzDywfKkdha6Wav6z/

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

4. Kompetenzcheck im Browser öffnen: http://localhost/


5. MailHog im Browser öffnen um Bestätigunsmails abzufangen: http://localhost:8025/