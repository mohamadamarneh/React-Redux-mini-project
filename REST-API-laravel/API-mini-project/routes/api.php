<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\productController;
use App\Models\product;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/products',[productController::class,'index']);

Route::get('/products/{id}',[productController::class,'single']);

Route::post('/products',[productController::class,'store']);

Route::put('/products/{product}',[productController::class,'update']);

Route::delete('/products/{product}',[productController::class,'destroy']);




