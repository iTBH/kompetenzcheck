<div class="navigation">
    <div class="ui list">
        <div class="mobile"><a href="javascript:void(0);" class="active"><i class="sidebar icon"></i></a></div>
        <div><a href="{{ route('dashboard.index') }}" class="{{ Request::is('dashboard*') || Request::is('check*') ? 'active' : null }}">Checks</a></div>
        <div><a href="{{ route('partner.index') }}" class="{{ Request::is('partner*') ? 'active' : null }}">Partner/innen</a></div>
        <div><a href="{{ route('tags.index') }}" class="{{ Request::is('tags*') ? 'active' : null }}">Schlagwörter</a></div>
        @if(Auth::user()->isAdmin())
            <div><a href="{{ route('admin.users.index') }}" class="{{ Request::is('admin*') ? 'active' : null }}">Administration</a></div>
        @endif

        <!-- topnavigation - responsive -->
        <div><a href="{{ route('profile.index') }}" class="{{ Request::is('profile*') ? 'active' : null }} topnavigation">{{ Auth::user()->name }}</a></div>
        <div><a href="{{ Config::get('help.support') }}" class="topnavigation" target="_blank">Hilfe/FAQ</a></div>
        <div>
            <form action="{{ route('logout') }}" method="POST" class=topnavigation">
                {{ csrf_field() }}
                <a href="javascript:void(0)" onclick="$(this).closest('form').submit()" class="topnavigation">Abmelden</a>
            </form>
        </div>
        <!-- end - topnavigation - responsive -->
    </div>
</div>
