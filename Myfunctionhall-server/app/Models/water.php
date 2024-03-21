<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory; // Import HasFactory
use Illuminate\Database\Eloquent\Model;

class water extends Model
{
    use HasFactory; // Use HasFactory

    protected $fillable = ['name', 'type', 'contact', 'address', 'details','userid'];
}
