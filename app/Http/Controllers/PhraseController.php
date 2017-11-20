<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class PhraseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'modal' => [
                'header' => '<h1>Kompetenzbeschreibung</h1>',
                'content' => view('checks.phrase.index', ['categories' => (new Category())->all(), 'tab' => request('tab')])->render(),
                'actions' => view('checks.phrase.actions.actions')->render()
            ]
        ]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request)
    {
        $this->validate($request, [
            'category' => 'required',
            'statement' => 'required'
        ]);

        return response()->json([
            'view' => view('checks.phrase.item', [
                'category' => (new Category())->find($request->get('category')),
                'statement' => $request->get('statement'),
                'tab' => $request->get('tab')
            ])->render()
        ]);
    }
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {
        $this->validate($request, [
            'category' => 'required',
            'statement' => 'required'
        ]);

        return response()->json([
            'view' => view('checks.phrase.item', [
                'category' => (new Category())->find($request->get('category')),
                'statement' => $request->get('statement'),
                'tab' => $request->get('tab'),
                'unique' => $request->get('unique')
            ])->render(),
            'unique' => $request->get('unique')
        ]);
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request)
    {
        return response()->json([
            'modal' => [
                'header' => '<h1>Kompetenzbeschreibung</h1>',
                'content' => view('checks.phrase.index', [
                    'categories' => (new Category())->all(),
                    'category' => $request->get('category'),
                    'tab' => $request->get('tab'),
                    'statement' => $request->get('statement'),
                    'unique' => $request->get('unique'),
                ])->render(),
                'actions' => view('checks.phrase.actions.actions')->render()
            ]
        ]);
    }
}
