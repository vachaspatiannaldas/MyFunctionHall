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
        Schema::create('registers', function (Blueprint $table) {
            $table->id();
            $table->string('full_name');
           $table->string('email');
           $table->string('address');
           $table->string('landmark');
           $table->string('city');
           $table->string('state');
           $table->string('pin');
           $table->string('mobile');
           $table->string('pan');
           $table->string('upi');
           $table->string('password');
           $table->string('status');

            $table->timestamps();
        }); 
    }
//tehsil,ref,under_ref,pstatus
    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registers');
    }
};
