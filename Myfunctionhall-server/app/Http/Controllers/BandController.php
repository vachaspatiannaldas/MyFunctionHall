<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\band;
use App\Models\User;
use App\Models\hall;


use DB;
use Illuminate\Support\Facades\Storage;

class BandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $band = band::get();
        return response()->json($band);
    }

    public function bandvendorfetch($id)
    {
      $bands = Band::where('userid', $id)->get();

     return response()->json($bands);
    }




    public function bandvendorfetchfrontend($id)
    {
        $user = hall::find($id);

        $user_id = $user->userid;

        // return $user_id;
        $bands = DB::table('bands')
            ->select('*')
            ->where('userid', $user_id)
            ->get();

        return response()->json($bands);

      //  return response()->json($result);
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

            $band = new band([
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'contact' => $request->get('contact'),
                'address' => $request->get('address'),
                'details' => $request->get('details'),
                'userid' => $request->get('userid'),
            ]);

            $band->save();

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
        $band = band::where('id',$id)->first();
        return response()->json($band);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $band = band::where('id',$id)->first();
        return response()->json($band);
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
        $address = $request->get('address');
        $details = $request->get('details');
        $userid = $request->get('userid');

        $bandup = band::find($id);

        $bandup->name = $name;
        $bandup->type = $type;
        $bandup->contact = $contact;
        $bandup->address = $address;
        $bandup->details = $details;
        $bandup->userid = $userid;

        $bandup->save();

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
        $band = band::find($id);
        $band->delete();
        return response()->json($band);
    }
}
