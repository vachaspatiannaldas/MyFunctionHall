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
        Schema::table('eventmgs', function (Blueprint $table) {
          $table->unsignedBigInteger('userid'); // Change the data type to match your user's ID data type

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('eventmgs', function (Blueprint $table) {
          $table->dropColumn('userid');

        });
    }
};
