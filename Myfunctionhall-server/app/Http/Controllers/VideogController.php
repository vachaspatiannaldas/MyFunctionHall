<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\videog;
use DB;
use Illuminate\Support\Facades\Storage;

class VideogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videog = videog::get();
        return response()->json($videog);
    }

    public function videogvendorfetch($id)
    {
      $videog = videog::where('userid', $id)->get();

     return response()->json($videog);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $arr = [];

            $videog = new videog([
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'contact' => $request->get('contact'),
                'email' => $request->get('email'),
                'address' => $request->get('address'),
                'experience' => $request->get('experience'),
                'details' => $request->get('details'),
                'userid' => $request->get('userid'),
            ]);

            $videog->save();

            $data['status'] = "success";
            $data['msg'] = "Data Insert";
            array_push($arr, $data);

            return response()->json($arr);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $videog = videog::where('id',$id)->first();
        return response()->json($videog);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $videog = videog::where('id',$id)->first();
        return response()->json($videog);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $arr = [];

        $name = $request->get('name');
        $type = $request->get('type');
        $contact = $request->get('contact');
        $email = $request->get('email');
        $address = $request->get('address');
        $experience = $request->get('experience');
        $details = $request->get('details');
        $userid = $request->get('userid');

        $videogup = videog::find($id);

        $videogup->name = $name;
        $videogup->type = $type;
        $videogup->contact = $contact;
        $videogup->email = $email;
        $videogup->address = $address;
        $videogup->experience = $experience;
        $videogup->details = $details;
        $videogup->userid = $userid;

        $videogup->save();

        $data['status'] = "success";
        $data['msg'] = "Data Updated";
        array_push($arr, $data);

        return response()->json($arr);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $videog = videog::find($id);
        $videog->delete();
        return response()->json($videog);
    }
}
