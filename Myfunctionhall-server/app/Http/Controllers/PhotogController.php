<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\photog;
use DB;
use App\Models\hall;
use Illuminate\Support\Facades\Storage;

class PhotogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $photog = photog::get();
        return response()->json($photog);
    }
    public function photogvendorfetch($id)
    {
      $bands = photog::where('userid', $id)->get();

     return response()->json($bands);
    }


    public function photogvendorfetchfrontend($id)
    {
        $user = hall::find($id);
        $user_id = $user->userid;

        $bands = DB::table('photogs')
            ->select('*')
            ->where('userid', $user_id)
            ->get();

        return response()->json($bands);

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

            $photog = new photog([
                'name' => $request->get('name'),
                'contact' => $request->get('contact'),
                'email' => $request->get('email'),
                'address' => $request->get('address'),
                'experience' => $request->get('experience'),
                'details' => $request->get('details'),
                'userid' => $request->get('userid'),
            ]);

            $photog->save();

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
        $photog = photog::where('id',$id)->first();
        return response()->json($photog);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $photog = photog::where('id',$id)->first();
        return response()->json($photog);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $arr = [];

        $name = $request->get('name');
        $contact = $request->get('contact');
        $email = $request->get('email');
        $address = $request->get('address');
        $experience = $request->get('experience');
        $details = $request->get('details');
        $userid = $request->get('userid');

        $photogup = photog::find($id);

        $photogup->name = $name;
        $photogup->contact = $contact;
        $photogup->email = $email;
        $photogup->address = $address;
        $photogup->experience = $experience;
        $photogup->details = $details;
        $photogup->userid = $userid;

        $photogup->save();

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
        $photog = photog::find($id);
        $photog->delete();
        return response()->json($photog);
    }
}
