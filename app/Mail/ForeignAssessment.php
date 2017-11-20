<?php

namespace App\Mail;

use App\Models\Invitation;
use App\Models\Partner;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ForeignAssessment extends Mailable
{
    use Queueable, SerializesModels;

    public $invitation;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct(Invitation $invitation)
    {
        $this->invitation = $invitation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Sie haben eine Einladung zu einer Fremdeinschätzung erhalten.')
            ->markdown('emails.foreignassessment', ['invitation' => $this->invitation]);
    }
}
