<?php
namespace App\Http\Middleware;


use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminMiddleware
{
public function handle(Request $request, Closure $next)
{
// Eğer kullanıcı adminse ve /dashboard rotasına erişmeye çalışıyorsa admin dashboard'a yönlendir.
        if (Auth::check() && Auth::user()->is_admin) {
            if ($request->routeIs('dashboard')) {
                dd('ananı sekyim ');

                return redirect()->route('admin.dashboard');
            }

            return $next($request);
        }

        // Eğer admin dashboard rotasına erişmeye çalışıyorsa ama admin değilse normal dashboard'a yönlendir.
        if ($request->routeIs('admin.dashboard')) {
            return redirect()->route('dashboard');
        }

        return $next($request);
    }
}
