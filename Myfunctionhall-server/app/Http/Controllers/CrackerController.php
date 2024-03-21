<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\cracker;
use DB;
use Illuminate\Support\Facades\Storage;

class CrackerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $cracker = cracker::get();
        return response()->json($cracker);
    }

    public function crackervendorfetch($id)
    {
      $cracker = cracker::where('userid',$id)->get();
      return response()->json($cracker);
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

        // if ($request->hasFile('video')) {
        //     $videoFile = $request->file('video');
        //     $videoFileName = date('His') . $videoFile->getClientOriginalName();
        //
        //     // Store the video file in the public folder
        //     $videoFile->move(public_path('cracker_upload'), $videoFileName);
        // }

        $cracker = new cracker([ // Assuming the model class is "cracker"
            'name' => $request->get('name'),
            'type' => $request->get('type'),
            'contact' => $request->get('contact'),
            'address' => $request->get('address'),
            'video' => $request->get('video'),
            'details' => $request->get('details'),
            'userid'=>$request->get('userid')
        ]);

        $cracker->save();

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
        $cracker = cracker::where('id',$id)->first();
       return response()->json($cracker);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $cracker = cracker::where('id',$id)->first();
       return response()->json($cracker);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $data = cracker::find($id);

        // if ($request->hasFile('video')) {
        // $filepath = "cracker_upload/";
        // $fileName = $request->file('video')->getClientOriginalName();
        // $request->file('video')->move($filepath, $fileName);
        //
        // // Delete the existing video file if it exists
        // if ($data->video && file_exists($filepath . $data->video)) {
        // unlink($filepath . $data->video);
        // }
        //
        // $data->video = $fileName;
        //  }

         // Update other fields
         $data->name = $request->get('name');
         $data->video = $request->get('video');

         $data->type = $request->get('type');
         $data->contact = $request->get('contact');
         $data->address = $request->get('address');
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
        $cracker = cracker::find($id);
        $cracker->delete();
        return response()->json($cracker);
    }
}
