<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Invitation extends Model
{
    protected $table = "invitations";

    protected $guarded = ['id'];

    public function check()
    {
        return $this->belongsTo(Check::class);
    }

    public function status()
    {
        return $this->belongsTo(InvitationStatus::class);
    }
}
