<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class cracker extends Model
{
    use HasFactory;
    protected $fillable = [
            'name',
            'type',
            'contact',
            'address',
            'video',
            'details',
            'userid'
];
}
