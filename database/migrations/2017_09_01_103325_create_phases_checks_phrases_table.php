<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhasesChecksPhrasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phases_checks_phrases', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("phases_checks_id")->unsigned();
            $table->text("statement");
            $table->integer("category_id")->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('phases_checks_phrases', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
