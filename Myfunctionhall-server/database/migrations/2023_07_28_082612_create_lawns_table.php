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
        Schema::create('lawns', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('for');
            $table->string('type');
            $table->string('address');
            $table->string('contact');
            $table->string('capacity');
            $table->string('parking');
            $table->string('kitchen');
            $table->string('image');
            $table->string('video');
            $table->string('details');
            $table->string('userid');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('lawns');
    }
};
