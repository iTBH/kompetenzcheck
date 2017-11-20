<?php

use Illuminate\Database\Seeder;

class InvitationsStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('invitations_status')->insert([
            'name' => 'Eingeladen',
            'default' => true
        ]);
    }
}
