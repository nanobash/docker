<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/user', 'API\UserController@index');
Route::get('/user/{user}', 'API\UserController@show');

Route::get('/trade', 'API\TradeController@index');
Route::get('/trade/{trade}', 'API\TradeController@show');
Route::post('/trade', 'API\TradeController@store');
