<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tent;
use DB;
use Illuminate\Support\Facades\Storage;

class TentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tent = tent::get();
        return response()->json($tent);
    }

    public function tentvendorfetch($id)
    {
      $tent = tent::where('userid', $id)->get();

     return response()->json($tent);
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
        //     $videoFile->move(public_path('tent_upload'), $videoFileName);
        // }

        $tent = new tent([ // Assuming the model class is "tent"
            'name' => $request->get('name'),
            'type' => $request->get('type'),
            'contact' => $request->get('contact'),
            'address' => $request->get('address'),
            //'video' => isset($videoFileName) ? $videoFileName : null,
            'details' => $request->get('details'),
            'video' => $request->get('video'),
            'userid' => $request->get('userid'),
        ]);

        $tent->save();

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
        $tent = tent::where('id',$id)->first();
       return response()->json($tent);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tent = tent::where('id',$id)->first();
       return response()->json($tent);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $arr = [];
    //
    //     $name = $request->get('name');
    //     $type = $request->get('type');
    //     $contact = $request->get('contact');
    //     $address = $request->get('address');
    //     $details = $request->get('details');
    //
    //     $tentup = tent::find($id); // Assuming the model class is "tent"
    //
    //
    //     if ($request->hasFile('video')) {
    //         $videoFile = $request->file('video');
    //         $videoFileName = date('His') . $videoFile->getClientOriginalName();
    //
    //         // Store the video file in the public folder
    //         $videoFile->move(public_path('tent_upload'), $videoFileName);
    //
    //         $tentup->video = $videoFileName;
    //     }
    //
    //     $tentup->name = $name;
    //     $tentup->type = $type;
    //     $tentup->contact = $contact;
    //     $tentup->address = $address;
    //     $tentup->details = $details;
    //
    //     $tentup->save();
    //
    //     $data['status'] = "success";
    //     $data['msg'] = "Data Updated";
    //     array_push($arr, $data);
    //
    //     return response()->json($arr);
    // }


    public function update(Request $request, $id)
    {
        $data = Tent::find($id);

        // Check if a new video file is uploaded
        // if ($request->hasFile('video')) {
        //     $filepath = "tent_upload/";
        //     $fileName = $request->file('video')->getClientOriginalName();
        //     $request->file('video')->move($filepath, $fileName);
        //
        //     // Delete the existing video file if it exists
        //     if ($data->video && file_exists($filepath . $data->video)) {
        //         unlink($filepath . $data->video);
        //     }
        //
        //     $data->video = $fileName;
        // }

        // Update other fields
        $data->name = $request->get('name');
        $data->type = $request->get('type');
        $data->contact = $request->get('contact');
        $data->address = $request->get('address');
        $data->details = $request->get('details');
          $data->userid = $request->get('userid');
            $data->video = $request->get('video');
        // ... other field updates ...

        $data->save();

        return response()->json([['status' => 'success', 'msg' => 'Data Updated']]);
    }




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $tent = tent::find($id);
        $tent->delete();
        return response()->json($tent);
    }
}
