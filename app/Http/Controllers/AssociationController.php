<?php

namespace App\Http\Controllers;

use App\Models\Association;
use App\Models\Company;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AssociationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $association = Association::when(
            $request->has('dt'),
            function ($wquery) use ($request) {
                $wquery->where('dtvenda', $request->dt)->where('company_id', $request->fl);
            },
            function ($wquery) use ($request) {
                $lastDate = Association::where('company_id', $request->fl)->orderBy('dtvenda', 'DESC')->first();
                if ($lastDate !== null) $wquery->where('dtvenda', $lastDate->dtvenda)->where('company_id', $request->fl);
            }
        )->paginate(15);

        $companies = Company::get();
        return Inertia::render('Sale/Associacao/index', [
            'association' => $association,
            'companies' => $companies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Association $association)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Association $association)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Association $association)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Association $association)
    {
        //
    }
}
