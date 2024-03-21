<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class addon extends Model
{
    use HasFactory;

    protected $fillable = [
        'role',
        'name',
        'contact',
        'email',
        'address',
        'ratings',
        'testimonial_img',
        'eventhistory',
        'userid'
    ];
}
