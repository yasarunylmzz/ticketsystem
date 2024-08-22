<?php

use App\Http\Controllers\AdminDashboardController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserDashboardController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

    Route::get('/', function () {
        // Veritabanından tüm biletleri çekiyoruz
        $tickets = Ticket::all();
        $user = Auth::user();

        // Verileri ve diğer bilgileri Inertia bileşenine gönderiyoruz
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'tickets' => $tickets,
            'user' => $user,
        ]);
    });
    Route::get('/tickets', [TicketController::class, 'index'])->name('tickets.index');


    Route::get('/dashboard', [UserDashboardController::class, 'index'])
        ->name('dashboard')
        ->middleware('auth');


    Route::middleware(['auth', AdminMiddleware::class])->group(function () {
        Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
    });

    Route::middleware(['auth'])->group(function () {
            Route::get('/create-ticket', [TicketController::class, 'create'])->name('create.ticket');
            Route::post('/create-ticket', [TicketController::class, 'store'])->name('store.ticket');
        });

    Route::middleware('auth')->group(function () {
                Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
                Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
                Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    });

require __DIR__.'/auth.php';
