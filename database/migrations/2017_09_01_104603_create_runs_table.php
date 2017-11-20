<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRunsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('runs', function (Blueprint $table) {
            $table->increments("id");
            $table->dateTime("start")->nullable();
            $table->dateTime("end")->nullable();
            $table->text("type");
            $table->integer("invitation_id")->nullable()->unsigned();
            $table->integer("check_id")->nullable()->unsigned();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('runs', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
