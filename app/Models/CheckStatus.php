<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CheckStatus extends Model
{
    public $timestamps = false;

    protected $table = "check_status";

    protected $guarded = ['id'];

    public function checks()
    {
        return $this->hasMany(Check::class);
    }
}
