<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Inertia\Inertia;

class InvoicingController extends Controller
{
    public function index()
    {
        $companies = Company::get();
        return Inertia::render('Invoicing/index', [
            'companies' => $companies
        ]);
    }
}
