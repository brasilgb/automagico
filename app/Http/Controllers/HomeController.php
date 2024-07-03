<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $companies = Company::get();
        // dd(substr($request->dt, 0, 6));
        return Inertia::render('Home/index', [
            "companies" => $companies
        ]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
