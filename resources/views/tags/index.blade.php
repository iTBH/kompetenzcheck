@extends('layouts.app')

@section('title', 'Schlagwörter')

@section('content')
    @include('partials.flash')

    @include('partials.content-header', [
        'title' => 'Schlagwörter',
        'divider' => false,
        'help' => Config::get('help.tags'),
    ])
    <p>
        Hier können Sie Schlagwörter hinzufügen, bearbeiten oder löschen.
    </p>
    <div class="ui divider dotted"></div>
    <div class="ui divider hidden"></div>
    <div class="ui grid">
        <div class="eight wide column">
            <h2 class="green colored">Neues Schlagwort</h2>
            <form method="POST" action="{{ route('tags.store') }}" class="ui form">
                {{ csrf_field() }}
                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="name">Name:</label>
                        <input type="text" id="name" name="name" placeholder="">
                    </div>
                </div>
                <div class="fields">
                    <div class="sixteen wide field">
                        <label for="description">Beschreibung:</label>
                        <textarea id="description" name="description" placeholder=""></textarea>
                    </div>
                </div>
                <div class="fields">
                    <div class="sixteen wide field">
                        <button type="submit" class="ui primary button">Hinzufügen</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="eight wide column">
            @if(count($tags) > 0)
                <h2 class="green colored">Vorhandene Schlagwörter verwalten</h2>
                <div class="ui grid">
                    <div class="sixteen wide column">
                        <table class="ui very basic compact table">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th class="center aligned">Verwendungen</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($tags as $tag)
                                <tr>
                                    <td>
                                        <a href="{{ route('tags.show', $tag->id) }}"><strong>{{ $tag->name }}</strong><br/>
                                            <p><small>{{ $tag->description }}</small></p>
                                        </a>
                                        <br />
                                        <form onsubmit="return confirm('Schlagwort wirklich löschen?')"
                                              action="{{ route('tags.destroy', $tag->id) }}" method="POST">
                                            {{ csrf_field() }}
                                            {{ method_field('DELETE') }}
                                            <button type="submit" class="button link">Löschen</button>
                                            <a>|</a>
                                            <a href="{{ route('tags.edit', $tag->id) }}">Bearbeiten</a>
                                        </form>
                                    </td>
                                    <td class="center aligned">
                                        <a href="{{ route('tags.show', $tag->id) }}">
                                            <div class="ui large label" data-content="Anzahl der Verwendungen">
                                                {{ $tag->uses() }}
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            @endforeach
                        </table>
                        @include('partials.pagination', ['paginator' => $tags])
                    </div>
                </div>
            @else
                <div class="cta-text">
                    <h2 class="green colored">Du hast noch keine Schlagwörter.</h2>
                    <p>
                        Lege ein neues Schlagwort an oder klicke auf Hilfe um mehr über Schlagwörter zu erfahren.
                    </p>
                </div>
            @endif
        </div>
    </div>
@endsection
