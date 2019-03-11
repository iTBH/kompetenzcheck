<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\Storage;

class Config extends Model
{
    private static $configCache = [];

    protected $primaryKey = "key";

    protected $table = "config";

    public $timestamps = false;

    protected $fillable = [
        'key',
        'value'
    ];

    /**
     * @param String $key
     * @param null $default
     * @param bool $ignoreCache
     * @return mixed|null
     */
    public function getConfig($key, $default = null, $ignoreCache = false)
    {
        try {
            if( isset(self::$configCache[$key]) && !$ignoreCache ) {
                return self::$configCache[$key];
            }

            $data = $this->where('key', $key)->firstOrFail();
            self::$configCache[$key] = $data['value'];

            return $data['value'];
        } catch (ModelNotFoundException $e) {
            return $default;
        }
    }

    /**
     * @param $key
     * @return Model|null|static
     */
    public function getModel($key)
    {
        try {
            return $this->where('key', $key)->firstOrFail();
        } catch (ModelNotFoundException $e) {
            return null;
        }
    }

    /**
     * @param $key
     * @return bool|null
     */
    public function deleteConfig($key)
    {
        try {
            if ($config = $this->getModel($key)) {
                return $config->delete();
            }
        } catch (ModelNotFoundException $e) {
            return false;
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * @param $key
     * @param $value
     * @return bool
     */
    public function setConfig($key, $value)
    {
        try {
            self::$configCache[$key] = $value;
            if ($config = $this->getModel($key)) {
                return $config->update(['value' => $value]);
            }
            return $this->create(['key' => $key, 'value' => $value])->save();
        } catch (Exception $e) {
            return false;
        }
    }

    /**
     * @param $key
     * @param bool $default
     * @return bool|string
     */
    public function getConfigPictureUrl($key, $default = false)
    {
        return ($this->getConfig($key) ? Storage::url($this->getConfig($key)) : $default);
    }

}
