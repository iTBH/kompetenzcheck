@if( isset( $checks ) )
    <div class="ui grid">
        @foreach( $checks as $_check )
            @include('checks.partials._check', ['check' => $_check])
            <div class="ui divider"></div>
        @endforeach
    </div>
@endif