<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class catering extends Model
{
    use HasFactory;
    protected $fillable = [
           'caterer',
           'type',
           'contact',
           'email',
           'address',
           'speciality',
           'details',
           'userid'
 ];
}
