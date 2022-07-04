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

Route::get('/dashboard-user', function () {
    return view('user/dashboard');
});

//Admin Dashboard
Route::get('/Admin', function () {
    return view('admin/dashboard');
});

//User Pesan Angkut
Route::get('/pesan-pengangkutan', function () {
    return view('user/pesan-pengangkutan');
});

//Admin Riwayat Pesan Angkut
Route::get('/Admin/Riwayat', function () {
    return view('admin/riwayat');
});

//Admin pelaporan masalah
Route::get('/admin-pelaporan-masalah', function () {
    return view('admin/admin-pelaporan-masalah');
});
