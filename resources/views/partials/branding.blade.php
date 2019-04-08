<div class="branding">
    <a href="{{ route('dashboard.index') }}"><img src="{{(new \App\Models\Config())->getConfigPictureUrl('system_logo', asset('images/logo.png'))}}"></a>
</div>
