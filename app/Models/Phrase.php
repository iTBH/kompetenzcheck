<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Phrase extends Model
{
    protected $table = "phases_checks_phrases";

    public $timestamps = false;

    protected $guarded = ['id'];

    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function phasesCheck()
    {
        return $this->belongsTo(PhasesCheck::class);
    }

    public function check()
    {
        return $this->phasesCheck()->check();
    }

    public function runPhrases()
    {
        return $this->hasMany(RunPhrase::class, 'phases_checks_phrases_id', 'id');
    }
    
    public function getCategory() {

        return Category::find( $this->category_id );
    }
}
