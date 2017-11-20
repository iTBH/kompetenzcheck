<?php

namespace App\Http\Controllers;

use App\Models\Tag;
use App\Models\Taggable;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TagsController extends Controller
{
    public function index()
    {
        return view('tags.index', [
            'tags' => Auth::user()->tags()->orderBy('name', 'ASC')->paginate(10),
        ]);
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        try {
            $data = $request->only(['name','description']);
            Auth::user()->tags()->create($data);

            $request->session()->flash('status', ['message' => 'Das Schlagwort wurde erfolgreich erstellt.', 'level' => 'success']);
        } catch (QueryException $e) {
            if ($e->errorInfo[1] == 1062) {
                return redirect()->route('tags.index')->withErrors(['name' => 'Das Schlagwort ist schon vorhanden.']);
            }
        }

        return redirect()->route('tags.index');
    }

    public function show(Tag $tag)
    {
        $this->authorize('view', $tag);

        return view('tags.show', [
            'tag' => $tag,
        ]);
    }

    public function edit(Tag $tag)
    {
        $this->authorize('view', $tag);

        return view('tags.edit', [
            'tag' => $tag,
        ]);
    }

    public function update(Request $request, Tag $tag)
    {
        $this->validate($request, [
            'name' => 'required',
        ]);

        $this->authorize('update', $tag);

        $data = $request->only(['name','description']);
        $tag->update($data);

        $request->session()->flash('status', ['message' => 'Das Schlagwort wurde erfolgreich gespeichert.', 'level' => 'success']);

        return redirect()->route('tags.index');
    }

    public function destroy(Request $request, Tag $tag)
    {
        $this->authorize('delete', $tag);

        $tag->delete();

        $request->session()->flash('status', ['message' => 'Das Schlagwort wurde erfolgreich gelöscht.', 'level' => 'success']);

        return redirect()->route('tags.index');
    }
}
