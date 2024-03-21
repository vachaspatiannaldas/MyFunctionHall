<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\water;
use DB;
use Illuminate\Support\Facades\Storage;

class WaterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $water = water::get();
        return response()->json($water);
    }
    public function watervendorfetch($id)
    {
      $water = water::where('userid', $id)->get();

     return response()->json($water);
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

            $water = new water([
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'contact' => $request->get('contact'),
                'address' => $request->get('address'),
                'details' => $request->get('details'),
                'userid' => $request->get('userid'),
            ]);

            $water->save();

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
        $water = water::where('id',$id)->first();
        return response()->json($water);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $water = water::where('id',$id)->first();
        return response()->json($water);
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

        $waterup = water::find($id);

        $waterup->name = $name;
        $waterup->type = $type;
        $waterup->contact = $contact;
        $waterup->address = $address;
        $waterup->details = $details;
        $waterup->userid = $userid;

        $waterup->save();

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
        $water = water::find($id);
        $water->delete();
        return response()->json($water);
    }
}
