<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Organization;
use App\Models\Settings;
use Illuminate\Http\Request;

class ApiSettingsController extends Controller
{
    public function getSettingsForOrganization(Request $request)
    {
        $query = $request->get('org');

        if (!$query) {
            $organization = Settings::whereNull('organization_id')->first();
        }
        if ($query) {
            $organization = Settings::where('organization_id', $query)->first();
        }
        return response([
            'response' => $organization,
            'status' => 200
        ]);
    }
}
