<?php

namespace App\Mail;

use App\Models\Partner;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AssignCheck extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($shareKey, Partner $partner)
    {
        $this->partner = $partner;
        $this->share_key = $shareKey;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Ihnen wurde ein Check zugewiesen')
            ->markdown('emails.assignment', ['shareKey' => $this->share_key, 'partner' => $this->partner]);
    }
}
