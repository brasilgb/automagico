<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Sale;
use App\Models\Total;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SaleController extends Controller
{
    public function index(Request $request)
    {

        $sales = Sale::when(
            $request->has('dt'),
            function ($wquery) use ($request) {
                $wquery->where('dtvenda', $request->dt)->where('company_id', $request->fl);
            },
            function ($wquery) use ($request) {
                $lastDate = Sale::where('company_id', $request->fl)->orderBy('dtvenda', 'DESC')->first();
                if ($lastDate !== null) $wquery->where('dtvenda', $lastDate->dtvenda)->where('company_id', $request->fl);
            }
        )->paginate(15);

        $totalsday = Total::when(
            $request->has('dt'),
            function ($wquery) use ($request) {
                $wquery->where('datatu', $request->dt)->where('company_id', $request->fl);
            },
            function ($wquery) use ($request) {
                $lastDate = Total::where('company_id', $request->fl)->orderBy('id', 'DESC')->first();
                if ($lastDate !== null) $wquery->where('datatu', $lastDate->datatu)->where('company_id', $request->fl);
            }
        )->get();

        $companies = Company::get();
        return Inertia::render('Sale/Faturamento/index', [
            'sales' => $sales,
            'totalsday' => $totalsday,
            'companies' => $companies
        ]);
    }

    // public function filterSale(Request $request)
    // {
    //     $sales = Sale::where('dtvenda', '>=', $request->dtini)->where('dtvenda', '<=', $request->dtfim)->paginate(15);
    //     $association = Association::where('dtvenda', '>=', $request->dtini)->where('dtvenda', '<=', $request->dtfim)->paginate(15);
    //     return Inertia::render('Sale/index', ['sales' => $sales, 'association' => $association]);
    // }
}
