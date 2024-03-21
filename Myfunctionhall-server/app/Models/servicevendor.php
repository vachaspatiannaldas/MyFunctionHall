<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class servicevendor extends Model
{
    use HasFactory;
     protected $fillable = [
          'name',
          'ownername',
          'image',
          'details',
          'contact',
          'status',
          'sid',
];
}
