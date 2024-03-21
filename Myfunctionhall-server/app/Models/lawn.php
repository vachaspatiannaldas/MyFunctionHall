<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lawn extends Model
{
    use HasFactory;
    protected $fillable = [
            'name',
            'for',
            'type',
            'address',
            'contact',
            'capacity',
            'parking',
            'kitchen',
            'image',
            'video',
            'details',
            'userid'
];
}
