<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class profile extends Model
{
    use HasFactory;
     protected $fillable = [
        'name',
        'email',
        'phone',
        'category',
        'image',
        'banner',
        'address',
        'city',
        'state',
        'pin',
        'user_id'

          ];
}
