<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class advertise extends Model
{
    use HasFactory;
    protected $fillable = ['adprovider', 'adtitle', 'description', 'adtype', 'ad_duration', 'contract_duration', 'image', 'video','userid'];

}
