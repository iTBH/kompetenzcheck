<?php

namespace App\Providers;

use App\Models\Check;
use App\Models\Partner;
use App\Policies\CheckPolicy;
use App\Policies\PartnerPolicy;
use App\Policies\TagPolicy;
use App\Models\Tag;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        Tag::class => TagPolicy::class,
        Partner::class => PartnerPolicy::class,
        Check::class => CheckPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
