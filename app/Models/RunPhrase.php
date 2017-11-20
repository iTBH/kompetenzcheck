<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class RunPhrase extends Model
{
    protected $table = "run_phrases";

    public $timestamps = false;

    protected $guarded = ['id'];

    public function run()
    {
        return $this->belongsTo(Run::class);
    }

    public function phrase()
    {
        return $this->belongsTo(Phrase::class);
    }

    public function runs()
    {
        return $this->hasMany(Run::class, 'id', 'run_id');
    }
}
