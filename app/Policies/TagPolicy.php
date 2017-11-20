<?php

namespace App\Policies;

use App\Models\Tag;
use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user can view the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return mixed
     */
    public function view(User $user, Tag $tag)
    {
        return $user->id === $tag->user_id;
    }

    /**
     * Determine whether the user can update the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return mixed
     */
    public function update(User $user, Tag $tag)
    {
        return $user->id === $tag->user_id;
    }

    /**
     * Determine whether the user can delete the tag.
     *
     * @param  \App\Models\User $user
     * @param  \App\Models\Tag $tag
     * @return mixed
     */
    public function delete(User $user, Tag $tag)
    {
        return $user->id === $tag->user_id;
    }
}
