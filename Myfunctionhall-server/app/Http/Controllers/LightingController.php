<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lighting;
use DB;
use Illuminate\Support\Facades\Storage;
class LightingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lighting = lighting::get();
        return response()->json($lighting);
    } 
    public function lightvendorfetch($id)
{  
    // $lighting = lighting::where('userid',$id); 
    // return response()->json($lighting);

    $bands = lighting::where('userid', $id)->get();
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

            $lighting = new lighting([
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'contact' => $request->get('contact'),
                'address' => $request->get('address'),
                'details' => $request->get('details'),
                'userid' => $request->get('userid'),
            ]);

            $lighting->save();

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
        $lighting = lighting::where('id',$id)->first();
        return response()->json($lighting);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $lighting = lighting::where('id',$id)->first();
        return response()->json($lighting);
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

        $lightingup = lighting::find($id);

        $lightingup->name = $name;
        $lightingup->type = $type;
        $lightingup->contact = $contact;
        $lightingup->address = $address;
        $lightingup->details = $details;
        $lightingup->userid = $userid;

        $lightingup->save();

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
        $lighting = lighting::find($id);
        $lighting->delete();
        return response()->json($lighting);
    }
}
