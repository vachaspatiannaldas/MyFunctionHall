<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateHallsTable extends Migration
{
    public function up()
    {
        Schema::create('halls', function (Blueprint $table) {
            $table->id();
            $table->string('hname');
            $table->string('for');
            $table->string('type');
            $table->string('rent');
            $table->string('area');
            $table->string('address');
            $table->string('intakecap');
            $table->string('parkingcap');
            $table->string('kitchen');
            $table->string('kitchen_material');
            $table->string('timings');
            $table->string('contact');
            $table->string('watersupply');
            $table->string('washers');
            $table->string('waiters');
            $table->string('status')->nullable();
            $table->string('images');
            $table->string('video');
            $table->string('category');
            $table->string('capacity');
            $table->string('price');
            $table->string('userid');



            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('halls');
    }
}
