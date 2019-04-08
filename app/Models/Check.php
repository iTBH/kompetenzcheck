<?php

namespace App\Models;

use App\Helper\Taggable;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Check extends Model
{
    use Taggable;

    protected $table = "checks";

    protected $guarded = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function phases()
    {
        return $this->belongsToMany(Phase::class, (new PhasesCheck())->getTable())->withPivot('sort', 'id')->orderBy('sort', 'asc');
    }

    public function phasesChecks()
    {
        return $this->hasMany(PhasesCheck::class);
    }

    public function runs()
    {
        return $this->hasMany(Run::class);
    }

    public function phrases()
    {
        return $this->hasManyThrough(Phrase::class, PhasesCheck::class, 'check_id', 'phases_checks_id');
    }

    public function status()
    {
        return $this->hasMany(CheckStatus::class, 'check_id');
    }

    public function invitations()
    {
        return $this->hasMany(Invitation::class, 'check_id', 'id');
    }

    public function delete()
    {
        $phasesChecks = $this->phasesChecks()->get();
        if ($phasesChecks) {
            foreach ($phasesChecks as $_phasesCheck) {
                $_phasesCheck->delete();
            }
        }
        $this->untagAll();

        return parent::delete();
    }

    public function getCreatedType()
    {
        switch ($this->created_by) {
            case 'me':
                return "Ich habe den Check erstellt";
                break;
            case 'duplicated':
                return "Ich habe den Check dupliziert";
                break;
            case 'assigned':
                return "Ich habe den Check zugewiesen bekommen";
                break;
            case 'import':
                return "Ich habe den Check importiert";
                break;
        }
    }

    public function getLockedStatus()
    {
        $status = $this->status->where('state', 'locked')->first();

        if ($status)
            return $status->date;

        return false;
    }

    public function getAnonymisedStatus()
    {
        $status = $this->status->where('state', 'anonymised')->first();

        if ($status)
            return $status->date;

        return false;
    }

    public function history()
    {
        $history = [];

        // Erstellung
        $history[] = [
            'order-date' => $this->created_at,
            'date' => $this->created_at->format('d.m.Y'),
            'time' => $this->created_at->format('H:i'),
            'action' => $this->getCreatedType()
        ];

        // Selbst- und Fremdeinschätzungen
        foreach ($this->runs as $run) {
            $action = "";
            if ($run->type == 'me')
                $action = "Ich habe eine Selbsteinschätzung";
            else {
                $inv = $run->invitation()->first();
                if ($inv) {
                    $action = $inv->firstname . " " . $inv->lastname . " hat eine Fremdeinschätzung";
                }
            }

            if ($run->start) {
                $start = Carbon::createFromFormat('Y-m-d H:i:s', $run->start);
                $history[] = [
                    'order-date' => $start,
                    'date' => $start->format('d.m.Y'),
                    'time' => $start->format('H:i'),
                    'action' => $action . " gestartet"
                ];
            }

            if ($run->end) {
                $end = Carbon::createFromFormat('Y-m-d H:i:s', $run->end);
                $history[] = [
                    'order-date' => $end,
                    'date' => $end->format('d.m.Y'),
                    'time' => $end->format('H:i'),
                    'action' => $action . " beendet"
                ];
            }
        }

        // Beendet oder anonymisiert
        foreach ($this->status as $status) {
            $action = "";
            if ($status->state == 'anonymised')
                $action = "Ich habe den Check anonymisiert";
            else if ($status->state == 'locked')
                $action = "Ich habe den Check geschlossen";

            $date = Carbon::createFromFormat('Y-m-d', $status->date);
            $history[] = [
                'order-date' => $date,
                'date' => $date->format('d.m.Y'),
                'time' => $date->format('H:i'),
                'action' => $action
            ];
        }

        foreach ($this->invitations as $invitation) {
            $date = Carbon::createFromFormat('Y-m-d H:i:s', $invitation->created_at);
            $history[] = [
                'order-date' => $date,
                'date' => $date->format('d.m.Y'),
                'time' => $date->format('H:i'),
                'action' => "Ich habe " . $invitation->firstname . " " . $invitation->lastname . " zu einer Fremdeinschätzung eingeladen"];
        }

        $history = collect($history)->sortByDesc(function ($temp, $key) {
            return $temp['order-date']->getTimestamp();
        });
        return $history;
    }
}
