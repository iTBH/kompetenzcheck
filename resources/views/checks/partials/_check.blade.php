<div class="row check">
    <div class="twelve wide column">
        <h2 class="green colored">
            <a href="{{ route('check.show', ['check' => $check])  }}">{{ $check->title }}</a>
        </h2>

        <p>
            <div>Verwendungszweck:</div>
            <div>{{ $check->purpose }}</div>
        </p>

        <p>
            <div>Auftragsbeschreibung:</div>
            <div>{{ $check->description }}</div>
        </p>

        <p>
            <div>Schlagworte:</div>
            @include('checks.partials._tags')
        </p>

        @include('checks.partials._history')

    </div>

    <div class="four wide column right aligned">
        @include('checks.partials._actions')
    </div>
</div>