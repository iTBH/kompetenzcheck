<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $email = env('ADMIN_EMAIL', 'admin@localhost');
        $username = env('ADMIN_USERNAME', 'admin');

        // Check if user with email exists
        if (!\App\Models\User::where('email', $email)->first()) {
            DB::table('users')->insert([
                'name' => $username,
                'email' => $email,
                'password' => bcrypt(env('ADMIN_PASSWORD', 'admin')),
                'verified' => 1,
                'is_admin' => 1
            ]);
        }
    }
}
