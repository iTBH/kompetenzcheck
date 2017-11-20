<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Partner;
use Illuminate\Auth\Access\HandlesAuthorization;

class PartnerPolicy
{
    use HandlesAuthorization;

    /**
     * @param User $user
     * @param Partner $partner
     * @return bool
     */
    public function update(User $user, Partner $partner)
    {
        return $user->id === $partner->user_id;
    }

    /**
     * @param User $user
     * @param Partner $partner
     * @return bool
     */
    public function edit(User $user, Partner $partner)
    {
        return $user->id === $partner->user_id;
    }

    /**
     * @param User $user
     * @param Partner $partner
     * @return bool
     */
    public function delete(User $user, Partner $partner)
    {
        return $user->id === $partner->user_id;
    }
}
