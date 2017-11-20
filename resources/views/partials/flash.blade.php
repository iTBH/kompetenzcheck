@if (session('status'))
    <div class="ui {{session('status.level')}} message">
        <i class="close icon"></i>
        <div>
            {{ session('status.message') }}
        </div>
    </div>
@endif
@if (count($errors) > 0)
    <div class="ui negative message">
        <i class="close icon"></i>
        @foreach ($errors->all() as $error)
            <div>{{ $error }}</div>
        @endforeach
    </div>
@endif
