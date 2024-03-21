<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class marketing extends Model
{
    use HasFactory;
    protected $fillable = [
            'client',
            'contact',
            'email',
            'adtitle',
            'description',
            'image',
            'video',
            'length',
            'contract',
            'status',
            'userid'
];
}
