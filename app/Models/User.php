<?php

namespace App\Models;

use App\Mail\PasswordReset;
use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Mail;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'profession',
        'date_of_birth',
        'location_of_birth',
        'street',
        'city',
        'phone',
        'education',
        'email_token',
        'training_date_from',
        'training_date_to',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    public function tags()
    {
        return $this->hasMany(Tag::class);
    }

    public function checks()
    {
        return $this->hasMany(Check::class);
    }

    public function partners()
    {
        return $this->hasMany(Partner::class);
    }

    public function phases()
    {
        return $this->hasMany(Phase::class);
    }

    public function verified()
    {
        $this->verified = 1;
        $this->email_token = null;
        $this->save();
    }

    public function getDateOfBirthAttribute($value)
    {
        return $this->formatDate($value);
    }

    public function getTrainingDateFromAttribute($value)
    {
        return $this->formatDate($value);
    }

    public function getTrainingDateToAttribute($value)
    {
        return $this->formatDate($value);
    }

    public function sendPasswordResetNotification($token)
    {
        Mail::to($this->email)->send(new PasswordReset($this, $token));
    }

    private function formatDate($value)
    {
        if (is_null($value)) {
            return null;
        }
        return Carbon::parse($value)->format('d.m.Y');
    }
}
