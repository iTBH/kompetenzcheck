<?php

namespace App\Helper;

use App\Models\Check;

class ShareHelper
{
    public function getUniqueShareKey()
    {
        while (true) {
            $rand = str_pad(rand(1000, 9999999), 7, 0, STR_PAD_LEFT);
            if (!(new Check())->where('share_key', $rand)->first())
                return $rand;
        }
    }
}
