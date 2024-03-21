<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class eventmgmts extends Model
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
