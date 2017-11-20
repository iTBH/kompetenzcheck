<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCheckStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('check_status', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("check_id")->unsigned();
            $table->date("date");
            $table->enum("state", ['locked', 'anonymised']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('check_status', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
