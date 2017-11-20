<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChecksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('checks', function (Blueprint $table) {
            $table->increments("id");
            $table->integer("user_id")->unsigned();
            $table->text("title")->nullable();
            $table->text("purpose")->nullable();
            $table->text("description")->nullable();
            $table->enum("created_by", ['me', 'assigned', 'import', 'duplicated']);
            $table->boolean('allow_assignment')->nullable();
            $table->integer('share_key');
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
        Schema::table('checks', function (Blueprint $table) {
            $table->dropIfExists();
        });
    }
}
