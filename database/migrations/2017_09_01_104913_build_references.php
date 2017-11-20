<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class BuildReferences extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('checks', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['user_id']);
        });

        Schema::table('check_status', function (Blueprint $table) {
            $table->foreign('check_id')->references('id')->on('checks');
            $table->index(['check_id']);
        });

        Schema::table('phases', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['user_id']);
        });

        Schema::table('phases_checks', function (Blueprint $table) {
            $table->foreign('check_id')->references('id')->on('checks')->onDelete('cascade');
            $table->foreign('phase_id')->references('id')->on('phases');
            $table->index(['check_id', 'phase_id']);
        });

        Schema::table('phases_checks_phrases', function (Blueprint $table) {
            $table->foreign('phases_checks_id')->references('id')->on('phases_checks')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->index(['phases_checks_id']);
            $table->index(['category_id']);
        });

        Schema::table('partners', function (Blueprint $table) {
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['user_id']);
        });

        Schema::table('invitations', function (Blueprint $table) {
            $table->foreign('check_id')->references('id')->on('checks')->onDelete('cascade');
            $table->index(['check_id']);
            $table->index(['partner_id']);

            $table->foreign('status_id')->references('id')->on('invitations_status');
            $table->index(['status_id']);
        });

        Schema::table('runs', function (Blueprint $table) {
            $table->foreign('check_id')->references('id')->on('checks')->onDelete('cascade');
            $table->foreign('invitation_id')->references('id')->on('invitations')->onDelete('cascade');
            $table->index(['check_id']);
            $table->index(['invitation_id']);
        });

        Schema::table('run_phrases', function (Blueprint $table) {
            $table->foreign('run_id')->references('id')->on('runs');
            $table->foreign('phases_checks_phrases_id')->references('id')->on('phases_checks_phrases')->onDelete('cascade');

            $table->index(['run_id','phases_checks_phrases_id']);
        });
    }
}
