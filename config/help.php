<?php

$url = env('HELP_URL', 'https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/kompetenzcheck-hilfe/');

return [
    'support' => $url . '/',
    'profile' => [
        'personal' => $url . '/Hilfetext_Profil.html',
    ],
    'dashboard' => $url . '/Hilfetext_Dashboard.html',
    'partner' => $url . '/Hilfetext_Partner_und_Partnerinnen.html',
    'tags' => $url . '/Hilfetext_Schlagwoerter.html',
    'check' => $url . '/Hilfetext_Check_Detail.html',
    'check_create' => $url . '/Hilfetext_Check_erstellen.html',
    'assessment_own' => $url . '/Hilfetext_Selbsteinschaetzung.html',
    'assessment_they' => $url . '/Hilfetext_Fremdeinschaetzung.html',
    'evaluation' => $url . '/Hilfetext_Auswertungsgespraech.html'
];
