<?php

namespace App\Providers;

use App\Models\Assignment;
use App\Models\Category;
use App\Models\CheckAssignment;
use App\Models\Invitation;
use App\Models\Partner;
use App\Models\Tag;
use App\Models\User;
use Exception;
use App\Models\Check;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to your controller routes.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'App\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        $bindings = [
            'check' => Check::class,
            'invitation' => Invitation::class,
            'partner' => Partner::class,
            'tag' => Tag::class,
            'user' => User::class
        ];

        foreach ($bindings as $_key => $_binding) {
            Route::bind($_key, function ($value) use ($_binding) {
                try {
                    return (new $_binding())->findOrFail($value);
                } catch (Exception $e) {
                    return (new $_binding());
                }
            });
        }


    }

    /**
     * Define the routes for the application.
     *
     * @return void
     */
    public function map()
    {
        $this->mapApiRoutes();

        $this->mapWebRoutes();

        //
    }

    /**
     * Define the "web" routes for the application.
     *
     * These routes all receive session state, CSRF protection, etc.
     *
     * @return void
     */
    protected function mapWebRoutes()
    {
        Route::middleware('web')
            ->namespace($this->namespace)
            ->group(base_path('routes/web.php'));
    }

    /**
     * Define the "api" routes for the application.
     *
     * These routes are typically stateless.
     *
     * @return void
     */
    protected function mapApiRoutes()
    {
        Route::prefix('api')
            ->middleware('api')
            ->namespace($this->namespace)
            ->group(base_path('routes/api.php'));
    }
}
