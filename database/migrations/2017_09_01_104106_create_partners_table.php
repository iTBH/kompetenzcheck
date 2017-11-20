<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartnersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partners', function (Blueprint $table) {
            $table->increments("id");
            $table->enum("salutation", ['Herr', 'Frau']);
            $table->text("firstname");
            $table->text("lastname");
            $table->text("email");
            $table->integer("user_id")->unsigned();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('partners', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
