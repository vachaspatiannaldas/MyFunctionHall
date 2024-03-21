<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('enquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('event_date');
            $table->string('mobile');
            $table->string('guest_count');
            $table->string('plate_cost');
            $table->string('address');
            $table->string('food');
            $table->string('msg');
            $table->string('event_time');
            $table->string('email');
             $table->string('hall_id');
             $table->string('hall_name'); 
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('enquiries');
    }
};
