<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class eventmg extends Model
{
    use HasFactory;
    protected $fillable = [
          'name',
          'type',
          'contact',
          'email',
          'address',
          'packages',
          'details',
          'userid',
];
}
