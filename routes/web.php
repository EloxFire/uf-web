<?php

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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/addForm', function () {
    return view('forms.addForm');
});
Route::post('/property', function () {
    return view('forms.addForm');
});

Route::get('/delForm', function () {
    return view('forms.delForm');
});

Route::get('/modifForm', function () {
    return view('forms.modifForm');
});

Route::get('/buy', function () {
    return view('annonces');
});

Route::resource('property', 'PropertyController');
Route::post('modif', 'PropertyController@update');
Route::delete('delete', 'PropertyController@destroy')->name('bien.remove');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');
