<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


use Illuminate\Notifications\Notifiable;



class enquiry extends Model
{
    use HasFactory, Notifiable;



 protected $fillable = ['name','event_date','mobile','guest_count','plate_cost','address','food','msg','event_time','email','hall_id','hall_name'];

    public function routeNotificationForMail()
    {
        return $this->email;
    }
}
