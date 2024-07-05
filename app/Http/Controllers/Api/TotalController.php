<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Total;
use Illuminate\Http\Request;

class TotalController extends Controller
{
    public function getTotals(Request $request)
    {
        $wquery = Total::where('datatu', $request->dt)->where('filial', $request->fl)->first();
        if ($wquery) {
            $totals = Total::where('datatu', $request->dt)->where('filial', $request->fl)->first();
        } else {
            $lastDate = Total::where('filial', $request->fl)->orderBy('datatu', 'DESC')->first();
            if ($lastDate !== null)
                $totals = Total::where('datatu', $lastDate->datatu)->where('filial', $request->fl)->first();
        }

        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "totals" => $totals,
            ],
        ], 201);
    }
}