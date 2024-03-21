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
        Schema::create('makeups', function (Blueprint $table) {
            $table->id();
            $table->string('bname');
            $table->string('image');
            $table->string('for');
            $table->string('contact');
            $table->string('address');
            $table->string('experience');
            $table->string('link');
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
        Schema::dropIfExists('makeups');
    }
};
