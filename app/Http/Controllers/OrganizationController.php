<?php

namespace App\Http\Controllers;

use App\Models\Organization;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;
use Inertia\Inertia;

class OrganizationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $organizations = Organization::with('company')->orderBy('id', 'DESC')->paginate(12);
        return Inertia::render('Organization/index', ['organizations' => $organizations]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Organization/addOrganization');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->all();
        $messages = [
            'required' => 'A :attribute deve ser preenchida!'
        ];
        $request->validate(
            [
                'name' => 'required'
            ],
            $messages,
            [
                'name' => 'organização'
            ]
        );

        Organization::create($data);
        Session::flash('success', 'Organização cadastrada com sucesso!');
        return redirect()->route('organizations.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Organization $organization)
    {
        return Inertia::render('Organization/editOrganization', ['organization' => $organization]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Organization $organization)
    {
        return redirect()->route('organizations.show', ['organization' => $organization]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Organization $organization)
    {
        $data = $request->all();
        $messages = [
            'required' => 'A :attribute deve ser preenchida!'
        ];
        $request->validate(
            [
                'name' => 'required'
            ],
            $messages,
            [
                'name' => 'organização'
            ]
        );
        $organization->update($data);
        Session::flash('success', 'Organização alterada com sucesso!');
        return redirect()->route('organizations.show', ['organization' => $organization->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Organization $organization)
    {
        $organization->delete();
        Session::flash('success', 'Organização deletada com sucesso');
        return redirect()->route('organizations.index');
    }
}
