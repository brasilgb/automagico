<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Total;
use Illuminate\Http\Request;

class TotalController extends Controller
{
    public function getTotals(Request $request)
    {

        $wquery = Total::where('datatu', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        if ($wquery) {
            $totals = Total::where('datatu', $request->dt)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        } else {
            $lastDate = Total::where('organization_id', $request->org)->where('filial', $request->fl)->orderBy('datatu', 'DESC')->first();
            if ($lastDate !== null)
                $totals = Total::where('datatu', $lastDate->datatu)->where('organization_id', $request->org)->where('filial', $request->fl)->first();
        }

        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "totals" => $wquery ? $totals : [],
            ],
        ], 201);
    }
}