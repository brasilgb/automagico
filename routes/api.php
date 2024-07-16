<?php

use App\Http\Controllers\Api\ApiSettingsController;
use App\Http\Controllers\Api\AssociationController;
use App\Http\Controllers\Api\JsonToDatabaseController;
use App\Http\Controllers\Api\SaleController;
use App\Http\Controllers\Api\TotalController;
use App\Http\Controllers\SettingsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');
Route::post('/datainsert', [JsonToDatabaseController::class, 'index'])->name('datainsert');
Route::get('/vendas', [SaleController::class, 'getSales'])->name('vendas');
Route::get('/graficovendas', [SaleController::class, 'getSalesChart'])->name('graficovendas');
Route::get('/associacoes', [AssociationController::class, 'getAssociations'])->name('associacoes');
Route::get('/settings', [ApiSettingsController::class, 'getSettingsForOrganization'])->name('settings');
Route::get('/totais', [TotalController::class, 'getTotals'])->name('totais');