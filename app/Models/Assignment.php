<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Assignment extends Model
{
    protected $table = "assignments";

    protected $guarded = ['id'];

    public function check()
    {
        return $this->hasManyThrough(CheckAssignment::class, Check::class);
    }
}
