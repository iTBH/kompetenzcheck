<div class="fields">
    <div class="sixteen wide field">
        <label for="title">Kurztitel des Checks: <i class="help circle outline icon" data-content="Wie lautet der Arbeitsauftrag, der dem Check zugrunde liegt? Vergeben Sie einen möglichst prägnanten Check-Titel."></i></label>
        <input type="text" name="title" id="title" value="{{ old('title', $check->title) }}"/>
    </div>
</div>

<div class="fields">
    <div class="sixteen wide field">
        <label for="purpose">Verwendungszweck: <i class="help circle outline icon" data-content="Mit welchem Ziel wird der Check durchgeführt? z.B. Kompetenzentwicklung in einer Veranstaltung."></i></label>
        <input type="text" name="purpose" id="purpose" value="{{ old('purpose', $check->purpose) }}"/>
    </div>
</div>

<div class="fields">
    <div class="sixteen wide field">
        <label for="description">Auftragsbeschreibung: <i class="help circle outline icon" data-content="Beschreiben Sie den Arbeitsauftrag ausführlich:{{-- Rahmenbedingungen (z.B. Mitarbeiter, Ort, Zeitraum), Anforderungen/Vorschriften, Arbeitsgegenstände, zu erstellende (Teil)Produkte.--}} Es muss deutlich werden, in welchem Zusammenhang die Kompetenzebeschreiung gecheckt werden soll."></i></label>
        <textarea name="description" id="description">{{ old('description', $check->description) }}</textarea>
    </div>
</div>

<div class="field">
    <label for="tags">Schlagwörter</label>
    <div id="tags" class="ui fluid multiple search selection dropdown" onkeypress="return event.keyCode != 13;">
        <input name="tags" type="hidden" value="{{ $check ? implode(',', $check->tags->pluck('name')->toArray()) : old('tags') }}">
        <i class="dropdown icon"></i>
        <div class="default text">Hinzufügen</div>
        <div class="menu">
            @foreach($tags as $tag)
                <div class="item" data-value="{{ $tag->name }}">{{ $tag->name }}</div>
            @endforeach
        </div>
    </div>
</div>

<div class="ui divider"></div>
<h2 class="green colored">Kompetenzbeschreibungen</h2>
<?php $tabs = ['1' => ' active', '2' => '', '3' => '', '4' => '' ]; ?>
<div class="ui top attached tabular menu">
    @foreach( $tabs as $_index => $_class )
        <a class="item{{ $_class }} one-fourth" data-tab="{{ $_index  }}">
            <input value="@isset($phases[$_index]['phase']){{ $phases[$_index]['phase']->name }}@endisset" name="phase[{{$_index}}]">
        </a>
    @endforeach
</div>
@foreach( $tabs as $_index => $_class )
    <div class="ui bottom attached{{ $_class }} tab segment" data-tab="{{ $_index }}">
        <a href="javascript:void(0)" class="ui small icon button add-phrase-btn">
            <i class="plus square outline icon"></i> Kompetenzbeschreibung hinzufügen
        </a>
        @isset( $phases[$_index]['phrases'] )
            @forelse ($phases[$_index]['phrases'] as $_phrase)
                @include('checks.phrase.item', [
                    'statement' => $_phrase->statement,
                    'category' => $_phrase->getCategory(),
                    'tab' => $_index
                ])
            @empty
                <br /><br />
                <strong>Hinweis:</strong> Fügen Sie an dieser Stellen neue Kompetenzbeschreibungen hinzu. Klicken Sie dafür auf den Plus-Button in der jeweiligen Prozessphase.
            @endforelse
        @endisset
    </div>
@endforeach

<div class="ui divider"></div>
<div class="fields">
    <div class="sixteen wide field">
        <button type="submit" class="ui primary button">Speichern</button>
    </div>
</div>