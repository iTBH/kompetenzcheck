<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvitationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitations', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("check_id")->unsigned();
            $table->integer("status_id")->unsigned();
            $table->integer("partner_id")->unsigned();
            $table->enum("salutation", ['Herr', 'Frau']);
            $table->text("firstname");
            $table->text("lastname");
            $table->text("email");
            $table->text("url_hash");
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
        Schema::table('invitations', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
