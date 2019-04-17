<form class="ui form assessment dialog">
    {{ csrf_field() }}

    <div class="statement">@if($phrase->getCategory()) <i class="{{ $phrase->getCategory()->icon }} icon"></i>@endif Der/Die Lernende {{ $phrase->statement }}</div>
    <div class="field">
        <label>Niveaustufen:</label>
    </div>
    <div class="ui colossal bullseye rating" data-rating="{{ $runphrase->rating }}"></div>
    <br/>
    <div class="ui label rating-text rating-no" style="@if(!$runphrase->rating || $runphrase->rating == 0 ) display:block; @else display: none; @endif">Es wurde noch keine Einschätzund durchgeführt.</div>
    <div class="ui label rating-text rating-1" style="@if($runphrase->rating == 1) display:block; @else display: none; @endif">Ich kann das noch nicht und brauche umfassende Unterstützung.</div>
    <div class="ui label rating-text rating-2" style="@if($runphrase->rating == 2) display:block; @else display: none; @endif">Ich kann das erst ein bischen und brauche noch relativ viel Unterstützung.</div>
    <div class="ui label rating-text rating-3" style="@if($runphrase->rating == 3) display:block; @else display: none; @endif">Ich kann das schon relativ gut und brauche nur noch wenig Unterstützung.</div>
    <div class="ui label rating-text rating-4" style="@if($runphrase->rating == 4) display:block; @else display: none; @endif">Ich kann das sehr gut und brauche keine weitere Unterstützung</div>
    <br/><br/><br/>
    <div class="fields">
        <div class="sixteen wide field">
            <label>Kommentar:</label>
            <textarea name="comment" placeholder="Notieren Sie hier Erfahrungen, Beobachtungen und Begründungen, die zur Kompetenzeinschätzung geführt haben.">{{ $runphrase->comment }}</textarea>
        </div>
    </div>
    <input type="hidden" name="check" value="{{ $check->id }}"/>
    <input type="hidden" name="phrase" value="{{ $phrase->id }}"/>
    <input type="hidden" name="run" value="{{ $run->id }}"/>
    <input type="hidden" name="runphrase" value="{{ $runphrase->id }}"/>
</form>