<?php

namespace App\Http\Middleware;

use App\Models\Settings;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return [
            ...parent::share($request),
            'flash' => [
                'message' => fn () => $request->session()->get('success')
            ],
            'auth' => [
                'user' => $request->user(),
            ],
            'user' => [
                'exists' => User::exists(),
            ],
            'settings' => fn () => [
                Auth::check() ? DB::table('settings')->where('organization_id', Auth::user()->organization_id)->first() : []
            ]
        ];
    }
}
