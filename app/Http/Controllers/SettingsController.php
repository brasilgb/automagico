<?php

namespace App\Http\Controllers;

use App\Models\Settings;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

class SettingsController extends Controller
{
    public function index()
    {
        if (Settings::get()->isEmpty()) {
            Settings::create();
        }
        $settings = Settings::first();
        return Inertia::render('Settings/index', ['settings' => $settings]);
    }

        /**
     * Display the specified resource.
     */
    public function update(Request $request, Settings $settings)
    {
        $data = $request->all();
        $storePath = public_path('storage/images');
        if ($request->hasfile('logo')) {
            $fileName = time() . '.' . $request->logo->extension();
            $request->logo->move($storePath, $fileName);
            if (file_exists($storePath . DIRECTORY_SEPARATOR . $settings->logo && $settings->logo)) {
                unlink($storePath . DIRECTORY_SEPARATOR . $settings->logo);
            }
        }
        $data['logo'] = $request->hasfile('logo') ? $fileName : $settings->logo;
        $settings->update($data);
        Session::flash('success', 'Dados da empresa editado com sucesso!');
        return Redirect::route('empresa.index');
    }
}