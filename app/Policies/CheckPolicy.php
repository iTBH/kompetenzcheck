<?php

namespace App\Policies;

use App\Models\User;
use App\Models\Check;
use Illuminate\Auth\Access\HandlesAuthorization;

class CheckPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the check.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Check $check
     * @return mixed
     */
    public function view(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }

    /**
     * Determine whether the user can create checks.
     *
     * @param  \App\Models\User $user
     * @return mixed
     */
    public function create(User $user)
    {
        return true;
    }

    /**
     * Determine whether the user can update the check.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Check $check
     * @return mixed
     */
    public function update(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }

    /**
     * Determine whether the user can delete the check.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Check $check
     * @return mixed
     */
    public function delete(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }


    /**
     * Determine whether the user can duplicate the check.
     *
     * @param User $user
     * @param Check $check
     * @return bool
     */
    public function duplicate(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }

    /**
     * Determine whether the user can lock the check.
     *
     * @param User $user
     * @param Check $check
     * @return bool
     */
    public function lock(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }

    /**
     * Determine whether the user can anonymize the check.
     *
     * @param User $user
     * @param Check $check
     * @return bool
     */
    public function anonymize(User $user, Check $check)
    {
        return $user->id === $check->user_id;
    }
}
