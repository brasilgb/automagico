<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Total;
use Illuminate\Http\Request;

class TotalController extends Controller
{
    public function getTotals(Request $request)
    {
        $totalsday = Total::when(
            $request->has('dt'),
            function ($wquery) use ($request) {
                $wquery->where('datatu', $request->dt)->where('filial', $request->fl);
            },
            function ($wquery) use ($request) {
                $lastDate = Total::where('filial', $request->fl)->orderBy('id', 'DESC')->first();
                if ($lastDate !== null) $wquery->where('datatu', $lastDate->datatu)->where('filial', $request->fl);
            }
        )->get();

        return response()->json([
            "response" => [
                "success" => true,
                "status" => 201,
                "totals" => $totalsday,
            ],
        ], 201);
    }
}