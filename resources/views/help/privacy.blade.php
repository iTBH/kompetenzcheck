@extends('layouts.app')

@section('title', 'Datenschutz')

@section('content')
    @include('partials.flash')
    @include('partials.content-header', ['title' => 'Einwilligungserklärung in die Verarbeitung personenbezogener Daten'])

    <h2 class="green colored">1. Datenschutz</h2>
    <p>
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
        Datenschutzvorschriften sowie dieser Datenschutzerklärung.
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (beispielsweise Name, Anschrift oder
        E-Mail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben. Wir weisen
        darauf hin, dass die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
        nicht möglich.
    </p>

    <h2 class="green colored">2. Der Kompetenz-Check: Gegenstand Inhalt, Umfang und Zweck der erlaubten Verarbeitung</h2>
    <p>Der Kompetenz-Check ist eine Online Anwedung und begleitet Sie in der Erfassung und Förderung von Handlungskompetenzen in Lern-, Forschungs- und Arbeitsprozessen. Durch die Gegenüberstellung
        von Selbst- und Fremdeinschätzung werden eigene Kompetenzen bewusst gemacht und mit individuellen Entwicklungszielen verknüpft. Legen Sie einen Kompetenz-Check an, schätzen Sie Ihre Stärken
        ein, oder geben Sie einer weiteren Person Feedback.

        Die gespeicherten Inhalte sind nur als Testdaten zu verstehen. Der Kompetenz-Check erfordert eine Installation auf einer gesonderten Plattform, da hiermit personenbezogene Daten erhoben werden
        können und diese einen gesteigerten Datenschutz erfordern.

        Bitte nutzen Sie die Kontaktmöglichkeiten , um eine Installation des Kompetenz-Checks für Ihre Zwecke zu nutzen.</p>

    <h2 class="green colored">3. Art der Daten</h2>
    <p>Die hier aufgenommenen Login-Daten, Namen und E-Mail-Adressen sowie die Kompetenzeinschätzugnen dienen als Testzweck der Funktionalität der Online-Plattform. Zudem werden damit
        wissenschaftliche Zwecke verbunden.</p>

    <h2 class="green colored">4. Dauer der Aufbewahrung</h2>
    <p>Sämtliche Daten werden - sofern kein vorheriger Widerruf erfolgt - für die Projektlaufzeit bis Ende Dezember 2016 gespeichert. Nach dem Ende der Projektlaufzeit ist eine Fortsetzung der Dienste
        angestrebt, aber derzeit noch nicht gesichert. Im Falle und im Rahmen einer solchen Fortsetzung des Betriebes werden die Daten für die Laufzeit der Verlängerung gespeichert.
        Eine Löschung der Datenbestände eforlgt gegen Ende Dezember 2016 oder früher. Für wissenschaftliche Zwecke kann eine längere Speicherung erfolgen, hierzu s.u.</p>

    <h2 class="green colored">5. Verwendung für wissenschaftliche Zwecke</h2>
    <p>Den Regeln des Hamburgischen Datenschutzgesetzes (HmbDSG) folgend, können die Daten nach Projektende oder auch nach Widerruf für wissenschaftliche Zwecke durch die datenverarbeitende Stelle
        weiterverwendet werden, soweit die schutzwürdigen Interessen des Unterzeichners dadurch nicht verletzt werden.
        Soweit es der Forschungszweck gestattet, werden die Daten anonymisiert.
        Es gelten keine von § 27 HmbDSG abweichenden Bestimmungen.
        Das Forschungskonzept kann auf Anfrage zur Verfügung gestellt werden.</p>

    <h2 class="green colored">6. Kontakt</h2>
    <p>Wenn Sie mit uns Kontakt aufnehmen, werden Ihre Angaben zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.</p>
@endsection
