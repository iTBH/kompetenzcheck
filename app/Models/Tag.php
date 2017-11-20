<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $table = 'tags';
    public $timestamps = false;

    protected $fillable = [
        'name',
        'description'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function checks()
    {
        return $this->morphedByMany(Check::class, 'taggable');
    }

    public function taggables()
    {
        return $this->hasMany(Taggable::class);
    }

    public function uses()
    {
        return $this->taggables()->count();
    }

    public function delete()
    {
        $this->taggables()->delete();

        return parent::delete();
    }
}
