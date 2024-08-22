<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class TicketController extends Controller
{

    public function index()
    {
        // Veritabanından tüm etkinlikleri çekiyoruz
        $tickets = Ticket::all();

        // Bu verileri Inertia'ya gönderiyoruz
        return inertia('Welcome', [
            'tickets' => $tickets
        ]);
    }
    // Bilet oluşturma formunu gösterir
    // Laravel Controller örneği
    public function create() {
        $categories = ['Music', 'Arts & Culture', 'Sports'];  // Örnek veri
        return inertia('Tickets/Create', [
            'categories' => $categories,
            'auth' => Auth::user(),
        ]);
    }


    // Bilet oluşturma işlemini kaydeder
    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required|string|max:255',
            'organizer' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'event_date' => 'required|date',
            'event_time' => 'required',
            'ticket_price' => 'required|numeric',
            'category' => 'required|string|max:255',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
        ]);

        // Dosya yükleme işlemi
        $imagePath = $request->file('image')->store('tickets', 'public');


        // Veritabanına kayıt
        $ticket = Ticket::create([
            'event_name' => $request->event_name,
            'organizer' => $request->organizer,
            'location' => $request->location,
            'event_date' => $request->event_date,
            'event_time' => $request->event_time,
            'ticket_price' => $request->ticket_price,
            'category' => $request->category,
            'image' => $imagePath,  // Burada dosya yolunu kaydediyoruz
        ]);


        return redirect()->route('tickets.index')->with('success', 'Ticket created successfully.');
    }

}
