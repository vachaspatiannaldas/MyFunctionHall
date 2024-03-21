<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class lighting extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'type',
        'contact',
        'address',
        'details',
        'userid'
];
}
