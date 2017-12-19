<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\DomCrawler\Crawler;

class HelpController extends Controller
{
    public function help(Request $request)
    {
        $url = $request->get('url');
        $html = file_get_contents($url);

        $crawler = new Crawler($html);
        $data = trim($crawler->filter('body > div > div.book-body > div > div.page-wrapper > div')->first()->html());
        $data = str_replace('href="', 'href="https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/', $data);
        $data = str_replace('src="', 'src="https://fizban05.rz.tu-harburg.de/itbh/kompetenzcheck/', $data);

        return $data;
    }

    public function imprint()
    {
        return view('help.imprint');
    }

    public function privacy()
    {
        return view('help.privacy');
    }
}