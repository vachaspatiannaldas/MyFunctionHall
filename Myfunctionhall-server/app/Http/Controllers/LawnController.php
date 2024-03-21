<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\lawn;
use DB;
use Illuminate\Support\Facades\Storage;

class LawnController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lawn = lawn::get();
        return response()->json($lawn);
    }
public function lawnvendorfetch($id)
{
  $lawn = lawn::where('userid',$id)->get();
  return response()->json($lawn);
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
    // public function store(Request $request)
    // {
    //     $arr = [];

    //     if ($request->hasFile('image')) {
    //         $imageFile = $request->file('image');
    //         $imageFileName = date('His') . $imageFile->getClientOriginalName();

    //         // Store the image file in the public folder
    //         $imageFile->move(public_path('lawn_upload'), $imageFileName);
    //     }


    //     $lawn = new lawn([ // Assuming the model class is "lawn"
    //         'name' => $request->get('name'),
    //         'for' => $request->get('for'),
    //         'type' => $request->get('type'),
    //         'address' => $request->get('address'),
    //         'contact' => $request->get('contact'),
    //         'capacity' => $request->get('capacity'),
    //         'parking' => $request->get('parking'),
    //         'kitchen' => $request->get('kitchen'),
    //         'image' => isset($imageFileName) ? $imageFileName : null,
    //         // 'video' => isset($videoFileName) ? $videoFileName : null,
    //           'video' => $request->get('video'),
    //         'details' => $request->get('details'),
    //           'userid' => $request->get('userid'),
    //     ]);

    //     $lawn->save();

    //     $data['status'] = "success";
    //     $data['msg'] = "Data Insert";
    //     array_push($arr, $data);

    //     return response()->json($arr);
    // }






    public function store(Request $request)
{
    $arr = [];

    if ($request->hasFile('image')) {
        $imageFile = $request->file('image');
        $imageFileName = $imageFile->getClientOriginalName();

        // Store the image file in the public folder
        $imageFile->move(public_path('lawn_upload'), $imageFileName);
    }

    $lawn = new lawn([ // Assuming the model class is "lawn"
        'name' => $request->get('name'),
        'for' => $request->get('for'),
        'type' => $request->get('type'),
        'address' => $request->get('address'),
        'contact' => $request->get('contact'),
        'capacity' => $request->get('capacity'),
        'parking' => $request->get('parking'),
        'kitchen' => $request->get('kitchen'),
        'image' => isset($imageFileName) ? $imageFileName : null,
        'video' => $request->get('video'),
        'details' => $request->get('details'),
        'userid' => $request->get('userid'),
    ]);

    $lawn->save();

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
        $lawn = lawn::where('id',$id)->first();
       return response()->json($lawn);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $lawn = lawn::where('id',$id)->first();
       return response()->json($lawn);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $arr = [];
    //
    //     $name = $request->get('name');
    //     $for = $request->get('for');
    //     $type = $request->get('type');
    //     $address = $request->get('address');
    //     $contact = $request->get('contact');
    //     $capacity = $request->get('capacity');
    //     $parking = $request->get('parking');
    //     $kitchen = $request->get('kitchen');
    //     $details = $request->get('details');
    //
    //     $lawnup = lawn::find($id); // Assuming the model class is "lawn"
    //
    //     if ($request->hasFile('image')) {
    //         $imageFile = $request->file('image');
    //         $imageFileName = date('His') . $imageFile->getClientOriginalName();
    //
    //         // Store the image file in the public folder
    //         $imageFile->move(public_path('lawn_upload'), $imageFileName);
    //
    //         $lawnup->image = $imageFileName;
    //     }
    //
    //     if ($request->hasFile('video')) {
    //         $videoFile = $request->file('video');
    //         $videoFileName = date('His') . $videoFile->getClientOriginalName();
    //
    //         // Store the video file in the public folder
    //         $videoFile->move(public_path('lawn_upload'), $videoFileName);
    //
    //         $lawnup->video = $videoFileName;
    //     }
    //
    //     $lawnup->name = $name;
    //     $lawnup->for = $for;
    //     $lawnup->type = $type;
    //     $lawnup->address = $address;
    //     $lawnup->contact = $contact;
    //     $lawnup->capacity = $capacity;
    //     $lawnup->parking = $parking;
    //     $lawnup->kitchen = $kitchen;
    //     $lawnup->details = $details;
    //
    //     $lawnup->save();
    //
    //     $data['status'] = "success";
    //     $data['msg'] = "Data Updated";
    //     array_push($arr, $data);
    //
    //     return response()->json($arr);
    // }










    public function update(Request $request, $id)
    {
        $data = lawn::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
            $filepath = "lawn_upload/";
            $fileName = $request->file('image')->getClientOriginalName();
            $request->file('image')->move($filepath, $fileName);

            // Delete the existing image file if it exists
            if ($data->image && file_exists($filepath . $data->image)) {
                unlink($filepath . $data->image);
            }

            $data->image = $fileName;
        }

        // Check if a new video file is uploaded
        // if ($request->hasFile('video')) {
        //     $filepath = "lawn_upload/";
        //     $videoFileName = date('His') . $request->file('video')->getClientOriginalName();
        //     $request->file('video')->move($filepath, $videoFileName);
        //
        //     // Delete the existing video file if it exists
        //     if ($data->video && file_exists($filepath . $data->video)) {
        //         unlink($filepath . $data->video);
        //     }
        //
        //     $data->video = $videoFileName;
        // }

        // Update other fields
        $data->name = $request->get('name');
        $data->for = $request->get('for');
        $data->type = $request->get('type');
        $data->address = $request->get('address');
        $data->contact = $request->get('contact');
        $data->capacity = $request->get('capacity');
        $data->parking = $request->get('parking');
        $data->kitchen = $request->get('kitchen');
        $data->details = $request->get('details');
        $data->video = $request->get('video');
        $data->userid = $request->get('userid');
        $data->save();

        return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }























    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $lawn = lawn::find($id);
        $lawn->delete();
        return response()->json($lawn);
    }
}
