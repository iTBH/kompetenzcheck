<div class="topnavigation">
    @if (Auth::check())
        <div class="item">
            <a href="{{ route('profile.index') }}"><img src="{{asset('images/user.png')}}"></a>
            <a href="{{ route('profile.index') }}" class="small ui secondary button" data-content="Profil">{{ Auth::user()->name }}</a>
        </div>
    @endif
    <div class="item">
        <a href="{{ Config::get('help.support') }}"><img src="{{asset('images/support.png')}}"></a>
        <a href="{{ Config::get('help.support') }}" target="_blank" class="small ui secondary button" data-content="Hilfe/FAQ">Hilfe/FAQ</a>
    </div>
    <div class="item">
        @if (Auth::guest())
            <a href="{{ route('login') }}"><img src="{{asset('images/login.png')}}"></a>
            <a href="{{ route('login') }}" class="small ui primary button" data-content="Anmelden">Anmelden</a>
        @else
            <form action="{{ route('logout') }}" method="POST">
                <img class="pointer" onclick="event.target.parentElement.submit()" src="{{asset('images/login.png')}}">
                {{ csrf_field() }}
                <button type="submit" class="small ui primary button" data-content="Abmelden">Abmelden</button>
            </form>
        @endif
    </div>
</div>
