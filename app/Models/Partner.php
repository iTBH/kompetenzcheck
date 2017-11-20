<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Auth;

class Partner extends Model
{
    protected $table = "partners";

    public $timestamps = false;

    protected $guarded = ['id'];

    public function getPartner()
    {
        return $this->where('user_id', '=', Auth::user()->id);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function assignment()
    {
        return $this->hasMany(Assignment::class);
    }

    public function findUserByMail()
    {
        return (new User())->where('email', $this->email)->first();
    }
}
