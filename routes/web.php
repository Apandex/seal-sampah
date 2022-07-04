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

//User Dashboard
Route::get('/dashboard-user', function () {
    return view('user/dashboard');
});

//User Laporan Masalah
Route::get('/lapor-masalah', function () {
    return view('user/laporan-masalah');
});

//User Pesan Angkut
Route::get('/pesan-pengangkutan', function () {
    return view('user/pesan-pengangkutan');
});

//User Pesan Angkut
Route::get('/riwayat-pengangkutan', function () {
    return view('user/riwayat-pengangkutan');
});


//Admin Dashboard
Route::get('/Admin', function () {
    return view('admin/dashboard');
});

//Admin Riwayat Pesan Angkut
Route::get('/Admin/Riwayat', function () {
    return view('admin/riwayat-pengangkutan');
});

//Admin pelaporan masalah
Route::get('/Admin/lapor-masalah', function () {
    return view('admin/laporan-masalah');
});
