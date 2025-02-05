<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chef extends Model
{
    use HasFactory;
    protected $fillable = [
           'name',
           'type',
           'image',
           'contact',
           'address',
           'speciality',
           'details',
           'userid'
    ];
}
