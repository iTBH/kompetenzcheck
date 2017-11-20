<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRunPhrasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('run_phrases', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("run_id")->unsigned();
            $table->integer("phases_checks_phrases_id")->unsigned();
            $table->text("comment")->nullable();
            $table->enum("rating", [1,2,3,4])->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('run_phrases', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
