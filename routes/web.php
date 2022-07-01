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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/login', function () {
    return view('login');
});

Route::get('/pelaporan-masalah', function () {
    return view('user/pelaporan-masalah');
});

//User Pesan Angkut
Route::get('/pesan-pengangkutan', function () {
    return view('user/pesan-pengangkutan');
});

//User Riwayat Pesan Angkut
Route::get('/riwayat-pengangkutan', function () {
    return view('user/riwayat-pengangkutan');
});

//Admin pelaporan masalah
Route::get('/admin-pelaporan-masalah', function () {
    return view ('admin/admin-pelaporan-masalah');
});
