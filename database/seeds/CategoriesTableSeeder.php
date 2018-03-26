<?php

use Illuminate\Database\Seeder;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        if (DB::table('categories')->where('name', 'Personale Kompetenz')->get()->count() == 0) {
            DB::table('categories')->insert([
                'name' => 'Personale Kompetenz',
                'icon' => 'users'
            ]);
        }
        if (DB::table('categories')->where('name', 'Fachkompetenz')->get()->count() == 0) {
            DB::table('categories')->insert([
                'name' => 'Fachkompetenz',
                'icon' => 'settings'
            ]);
        }
    }
}
