<?php

namespace App\Http\Controllers;

use App\Models\Config;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\Process\Exception\ProcessFailedException;
use Symfony\Component\Process\Process;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function users()
    {
        return view('admin.users.index', [
            'users' => User::paginate(20),
        ]);
    }

    /**
     * @param User $user
     */
    public function userDestroy(Request $request, User $user)
    {
        $user->delete();

        $request->session()->flash('status', ['message' => 'Der Benutzer wurde erfolgreich gelöscht.', 'level' => 'success']);

        return redirect()->route('admin.users.index');

    }

    /**
     * @param User $user
     *
     * @return \Illuminate\Http\Response
     */
    public function userEdit(User $user)
    {
        return view('admin.users.edit', [
            'user' => $user,
        ]);

    }

    /**
     * @return \Illuminate\Http\Response
     */
    public function userCreate()
    {
        return view('admin.users.create', [
            'user' => new User(),
        ]);
    }

    /**
     * @param Request $request
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    public function userUpdate(Request $request, User $user)
    {
        $data = $this->_prepareRequestData($request);

        if ($request->password || $request->password_confirmation) {
            $this->validate($request, [
                'password' => 'required|confirmed|min:6',
            ]);
            $data['password'] = Hash::make($request->get('password'));
        }

        $user->update($data);

        $request->session()->flash('status', ['message' => 'Der Benutzer wurde erfolgreich gespeichert.', 'level' => 'success']);

        return redirect()->route('admin.users.index');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function userStore(Request $request)
    {
        $this->validate($request, [
            'password' => 'required|confirmed|min:6',
        ]);

        $data = $this->_prepareRequestData($request);

        $data['email'] = $request->email;
        $data['password'] = Hash::make($request->password);
        $data['verified'] = 1;

        User::create($data);

        $request->session()->flash('status', ['message' => 'Der Benutzer wurde erfolgreich angelegt.', 'level' => 'success']);

        return redirect()->route('admin.users.index');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function _prepareRequestData(Request $request)
    {
        $data = $request->only(['name', 'profession', 'location_of_birth', 'street', 'city', 'phone', 'education']);
        $data['is_admin'] = $request->has('is_admin') ? 1 : 0;

        return $data;
    }

    public function config()
    {
        return view('admin.config.index', [
            'config' => new Config()
        ]);
    }

    public function saveConfig(Request $request)
    {
        $config = new Config();

        foreach ([
                 'system_logo',
                 'system_footer_1',
                 'system_footer_2',
                 'system_footer_3',
                 'system_footer_4',
                 'system_footer_5'
             ] as $_type) {
            $config->setConfig($_type, $this->_saveConfigImages($request, $_type));
        }

        $config->setConfig('ci_color_light', $request->input('ci_color_light') ?: '#00a2b1');
        $config->setConfig('ci_color_dark', $request->input('ci_color_dark') ?: '#394e62');

        $colorDefinitions = <<<COLORS
@portfolioPrimaryColor: {$config->getConfig('ci_color_light')};
@portfolioSecondaryColor: {$config->getConfig('ci_color_dark')};
COLORS;

        file_put_contents(base_path() . '/resources/assets/less/colors.less', $colorDefinitions);
        //shell_exec('cd ' . base_path() . ' && node node_modules/cross-env/dist/bin/cross-env.js NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js');

        try {
            $process = new Process('node node_modules/cross-env/dist/bin/cross-env.js NODE_ENV=production node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js', base_path());
            $process->run();

            if (!$process->isSuccessful()) {
                throw new ProcessFailedException($process);
            }

            $output = $process->getOutput();
        } catch (ProcessFailedException $e) {
            $msg = $e->getMessage();
        }
        return redirect()->back();
    }

    private function _saveConfigImages(Request $request, $key)
    {

        $store = (new Config())->getConfig($key, "");
        if ($request->hasFile($key)) {
            $file = $request->file($key);
            if (in_array($file->getMimeType(), ['image/png', 'image/jpeg', 'image/gif'])) {
                $name = md5_file($file->getPathname());
                $filename = $name . "." . $file->guessExtension();
                $store = $file->storeAs('config', $filename, ['disk' => 'public']);
            }
        } else {
            if (!is_null($request->input($key . "_delete"))) {
                $pic = $request->input($key . "_delete");
                if ($pic && !empty($pic)) {
                    Storage::disk('public')->delete($pic);
                    $store = "";
                }
            }
        }
        return $store;
    }

}
