<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Run extends Model
{
    protected $table = "runs";

    public $timestamps = false;

    protected $guarded = ['id'];

    public function runPhrases()
    {
        return $this->hasMany(RunPhrase::class);
    }

    public function phrases()
    {
        return $this->runPhrases()->phrase();
    }

    public function assignment()
    {
        return $this->belongsTo(Assignment::class);
    }

    public function check()
    {
        return $this->belongsTo(Check::class);
    }

    public function invitation()
    {
        return $this->hasOne(Invitation::class, 'id', 'invitation_id');
    }
}
