@if( isset( $checks ) && count($checks) > 0 )
    <div class="ui grid">
        @foreach( $checks as $_check )
            @include('checks.partials._check', ['check' => $_check])
            @if(!$loop->last)
                <div class="ui divider"></div>
            @endif
        @endforeach
    </div>
@else
    <div class="text-center">
        <h2 class="green colored">Sie haben noch keinen Check erstellt</h2>
        <p>Erstellen Sie hier einen Check oder rufen Sie die Hilfefunktion auf, um mehr über Checks zu erfahren.</p>
        <a href="{{ route('check.create') }}" class="ui big primary button">
            Check erstellen
        </a>
    </div>
@endif

<div class="pagination-container">
    @if ($checks->lastPage() > 1)
        <div class="ui pagination menu">
            <a class="item {{ ($checks->currentPage() == 1) ? ' disabled' : '' }}" href="{{ $checks->url(1) }}"><i class="icon angle left"></i></a>
            @for ($i = 1; $i <= $checks->lastPage(); $i++)
                <a class="item {{ ($checks->currentPage() == $i) ? ' active' : '' }}" href="{{ $checks->url($i) }}">{{ $i }}</a>
            @endfor
            <a class="item {{ ($checks->currentPage() == $checks->lastPage()) ? ' disabled' : '' }}" href="{{ $checks->url($checks->currentPage()+1) }}"><i class="angle right icon"></i></a>
        </div>
    @endif
</div>