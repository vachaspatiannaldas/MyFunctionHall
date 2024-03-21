<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class makeup extends Model
{
    use HasFactory;
    protected $fillable = [
        'bname',
        'image',
        'for',
        'contact',
        'address',
        'experience',
        'link',
        'details',
        'userid'
];
}
