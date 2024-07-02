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
    public function index(Request $request)
    {
        // dd($request->dt);
        // dd($request->fl);
        $sales = Sale::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('dtvenda', $request->dt)->where('company_id', $request->fl);
        })->orderBy('id', 'desc')->first();
        
        $associations = Association::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('dtvenda', $request->dt)->where('company_id', $request->fl);
        })->orderBy('id', 'desc')->first();
        
        $totalsday = Total::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('datatu', $request->dt)->where('company_id', $request->fl);
        })->orderBy('id', 'desc')->first();
        // dd($totalsday);
        
        $saleschart = Sale::when($request->has('dt'), function ($wquery) use ($request) {
            $wquery->where('anomes', substr($request->dt, 0, 6))->where('company_id', $request->fl);
        })->orderBy('id', 'desc')->get();
        
        $companies = Company::get();
        // dd(substr($request->dt, 0, 6));
        return Inertia::render('Home/index', [
            "sales" => $sales,
            "associations" => $associations,
            "totalsday" => $totalsday,
            "saleschart" => $saleschart,
            "companies" => $companies
        ]);
    }
    public function unauthorized()
    {
        return Inertia::render('Unauthorized/index');
    }
}
