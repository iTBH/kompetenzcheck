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
        if (DB::table('invitations_status')->where('name', 'Eingeladen')->get()->count() == 0) {
            DB::table('invitations_status')->insert([
                'name' => 'Eingeladen',
                'default' => true
            ]);
        }
    }
}
