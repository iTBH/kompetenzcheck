<div class="ep header">
    <div class="ui grid">
        <div class="thirteen wide column mb-1">
            <h1>
                {{ $title }}@if (isset($subtitle))_<span class="small">{{ $subtitle }}</span>@endif
            </h1>
            @if(isset($titletext))
                <p>{{$titletext}}</p>
            @endif
        </div>

        <div class="three wide right aligned column">
            @if(isset($edit))
                <a href="{{ $edit }}" class="ui small icon button"
                   data-content="{{ isset($edittext) ? $edittext : 'Bearbeiten' }}">
                    <i class="edit icon"></i>
                </a>
            @endif

            @if(isset($delete))
                <form @if(isset($delete['confirm']))onsubmit="return confirm('{{ $delete['confirm'] }}')"
                      @endif action="{{ $delete['route'] }}" method="POST">
                    {{ csrf_field() }}
                    {{ method_field('DELETE') }}
                    <button type="submit" class="ui small icon button" data-content="Löschen">
                        <i class="trash icon"></i>
                    </button>
                </form>
            @endif

            @if(isset($create))
                <a href="{{ $create }}" class="ui small icon button"
                   data-content="{{ isset($addtext) ? $addtext : 'Hinzufügen' }}">
                    <i class="plus icon"></i>
                </a>
            @endif

            @if(isset($custombutton))
                <a href="{{ $custombutton }}" target="{{isset($customtarget) ? $customtarget : '_self'}}" class="ui small icon button {{ $customclass }}"
                   data-content="{{ isset($customtext) ? $customtext : 'Achtung: Kein "customtext" definiert.' }}">
                    <i class="{{ $customicon }} icon"></i>
                </a>
            @endif

            @if(isset($help))
                <a target="_blank" href="{{ $help }}" class="help-button ui small secondary button">Hilfe</a>
            @endif
        </div>
    </div>
    @if(!isset($divider) || $divider == true)
        <div class="ui divider dotted"></div>
    @endif
    @if(isset($backurl))
        <div>
            <a class="" href="{{ $backurl }}"><i class="angle double left icon"></i>Zurück zum Aufgabenbereich</a>
        </div>
    @endif
</div>
