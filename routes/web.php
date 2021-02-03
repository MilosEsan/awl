<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any}', 'App\Http\Controllers\PagesController@index')->where('any', '.*');
/* Route::post('/awl/create', 'App\Http\Controllers\PagesController@store'); */


Route::post('/{any}', function (Request $request) {

    $request->validate([
        'name'  =>  'required|min:2',
    ]);
    
    $name = $request->input('name');

    return redirect('/');
});