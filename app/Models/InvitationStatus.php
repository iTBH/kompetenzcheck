<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class InvitationStatus extends Model
{
    protected $table = "invitations_status";

    protected $guarded = ['id'];

    public function invitations()
    {
        return $this->hasMany(Invitation::class);
    }
}
