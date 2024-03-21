<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class hall extends Model
{
    use HasFactory;
    protected $fillable = [
            'hname',
            'for',
            'type',
            'rent',
            'area',
            'address',
            'intakecap',
            'parkingcap',
            'kitchen',
            'kitchen_material',
            'timings',
            'contact',
            'watersupply',
            'washers',
            'waiters',
            'status',
            'images',
            'video',
            'category',
            'capacity',
            'price',
            'userid'

];

}
