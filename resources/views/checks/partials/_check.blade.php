<div class="row check">
    <div class="twelve wide column">
        <div class="ui grid">
            <div class="row">
                <div class="eleven wide column">
                    <h2 class="green colored">
                        <a href="{{ route('check.show', ['check' => $check])  }}">{{ $check->title }}</a>
                    </h2>
                </div>
                <div class="five wide column text-right">
                    @include('checks.partials._buttons')
                </div>
            </div>
        </div>

        <p>
        <div><b>Verwendungszweck:</b> {{ $check->purpose }}</div>
        </p>

        <p>
        <div><b>Auftragsbeschreibung:</b> {{ $check->description }}</div>
        </p>

        <p>
        <div><b>Schlagworte: </b>
            @include('checks.partials._tags')
        </div>
        </p>

        @include('checks.partials._history')

    </div>

    <div class="four wide column right aligned">
        @include('checks.partials._actions')
    </div>
</div>