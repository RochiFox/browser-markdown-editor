<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MarkdownController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('markdown', [MarkdownController::class, 'index']);
Route::get('markdown/{id?}', [MarkdownController::class, 'show']);
Route::post('markdown/add', [MarkdownController::class, 'store']);
Route::put('markdown/update/{id}', [MarkdownController::class, 'update']);
Route::delete('markdown/delete/{id}', [MarkdownController::class, 'destroy']);
