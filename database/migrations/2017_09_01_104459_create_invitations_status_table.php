<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateInvitationsStatusTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invitations_status', function (Blueprint $table) {
            $table->increments("id");
            $table->text("name");
            $table->boolean('default')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('invitations_status', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
