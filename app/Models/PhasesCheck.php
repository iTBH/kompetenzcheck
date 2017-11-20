<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PhasesCheck extends Model
{
    protected $table = "phases_checks";

    protected $guarded = ['id'];

    public $timestamps = false;

    public function phase()
    {
        return $this->belongsTo(Phase::class);
    }

    public function check()
    {
        return $this->belongsTo(Check::class);
    }

    public function phrases()
    {
        return $this->hasMany(Phrase::class, 'phases_checks_id');
    }

    public function delete()
    {
        $this->phrases()->delete();

        return parent::delete();
    }
}
