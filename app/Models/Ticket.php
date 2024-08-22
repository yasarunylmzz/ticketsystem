<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    protected $fillable = [
        'event_name',
        'organizer',
        'location',
        'event_time',
        'event_date',
        'ticket_price',
        'category',
        'image'
    ];
}
