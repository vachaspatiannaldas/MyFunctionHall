<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\chef;
use App\Models\hall;
use DB;
use Illuminate\Support\Facades\Storage;

class ChefController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chef = chef::get();
        return response()->json($chef);
    }

public function chefvendorfetch($id)
{
  $chef = chef::where('userid',$id)->get();
  return response()->json($chef);
}

public function chefvendorfetchfrontend($id)
{
    $user = hall::find($id);

    if (!$user) {
        // Handle the case where no user with the given $id is found
        return response()->json(['error' => 'User not found'], 404);
    }

    $user_id = $user->userid;
    $chefs = DB::table('chefs')
        ->select('*')
        ->where('userid', $user_id)
        ->get();

    return response()->json($chefs);
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

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            // $finalName = date('His') . $filename;

            // Store the file in the public folder
            $file->move(public_path('chef_upload'), $filename);

            $chef = new chef([ // Updated to use "chef" instead of "chef"
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'image' => $filename,
                'contact' => $request->get('contact'),
                'address' => $request->get('address'),
                'speciality' => $request->get('speciality'),
                'details' => $request->get('details'),
                  'userid' => $request->get('userid'),
            ]);

            $chef->save();

            $data['status'] = "success";
            $data['msg'] = "Data Insert";
            array_push($arr, $data);

            return response()->json($arr);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $chef = chef::where('id',$id)->first();
        return response()->json($chef);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $chef = chef::where('id',$id)->first();
        return response()->json($chef);
    }

    /**
     * Update the specified resource in storage.
     */


    public function update(Request $request, $id)
    {
        $data = chef::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
        $filepath = "chef_upload/";
        $fileName = $request->file('image')->getClientOriginalName();
        $request->file('image')->move($filepath, $fileName);

        // Delete the existing image file if it exists
        if ($data->image && file_exists($filepath . $data->image)) {
        unlink($filepath . $data->image);
        }

        $data->image = $fileName;
         }

         // Update other fields
         $data->name = $request->get('name');
         $data->type = $request->get('type');
         $data->contact = $request->get('contact');
         $data->address = $request->get('address');
         $data->speciality = $request->get('speciality');
         $data->details = $request->get('details');
          $data->userid = $request->get('userid');
         $data->update();

         return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $chef = chef::find($id);
        $chef->delete();
        return response()->json($chef);
    }
}
