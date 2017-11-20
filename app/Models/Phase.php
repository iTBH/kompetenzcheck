<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phase extends Model
{
    protected $table = "phases";

    public $timestamps = false;

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function phasesCheck()
    {
        return $this->belongsTo(PhasesCheck::class);
    }

    public function checks()
    {
        return $this->belongsToMany(Check::class, 'phases_checks')->withPivot('sort');
    }
}
