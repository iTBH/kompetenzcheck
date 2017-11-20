<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhasesChecksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phases_checks', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("check_id")->unsigned();
            $table->integer("phase_id")->unsigned();
            $table->integer('sort');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('phases_checks', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
