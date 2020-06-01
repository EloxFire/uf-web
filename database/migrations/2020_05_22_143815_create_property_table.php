<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePropertyTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('property', function (Blueprint $table) {
            $table->increments('id_property');
            $table->string('user_name')->nullable();
            $table->string('user_lastname')->nullable();
            $table->string('user_mail')->nullable();
            $table->string('property_name')->nullable();
            $table->string('property_type')->nullable();
            $table->string('property_area')->nullable();
            $table->string('property_room_nb')->nullable();
            $table->string('property_bedroom_nb')->nullable();
            $table->string('property_adress')->nullable();
            $table->string('property_adress_comp')->nullable();
            $table->string('property_city')->nullable();
            $table->string('property_zip')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('property');
    }
}
