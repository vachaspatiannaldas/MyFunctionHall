<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hall;
use DB;
use Illuminate\Support\Facades\Storage;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hall = hall::get();
        return response()->json($hall);
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

        if ($request->hasFile('images')) {
            $imageFile = $request->file('images');
            $imageFileName = date('His') . $imageFile->getClientOriginalName();

            // Store the image file in the public folder
            $imageFile->move(public_path('hall_upload'), $imageFileName);
        }

        if ($request->hasFile('video')) {
            $videoFile = $request->file('video');
            $videoFileName = date('His') . $videoFile->getClientOriginalName();

            // Store the video file in the public folder
            $videoFile->move(public_path('hall_upload'), $videoFileName);
        }

        $hall = new hall([ // Assuming the model class is "hall"
            'hname' => $request->get('hname'),
            'for' => $request->get('for'),
            'type' => $request->get('type'),
            'rent' => $request->get('rent'),
            'area' => $request->get('area'),
            'address' => $request->get('address'),
            'intakecap' => $request->get('intakecap'),
            'parkingcap' => $request->get('parkingcap'),
            'kitchen' => $request->get('kitchen'),
            'kitchen_material' => $request->get('kitchen_material'),
            'timings' => $request->get('timings'),
            'images' => isset($imageFileName) ? $imageFileName : null,
            'video' => isset($videoFileName) ? $videoFileName : null,
            'contact' => $request->get('contact'),
            'watersupply' => $request->get('watersupply'),
            'washers' => $request->get('washers'),
            'waiters' => $request->get('waiters'),
            'status' => $request->get('status'),
            'status' => $request->get('status'),
        ]);

        $hall->save();

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
        $hall = hall::where('id',$id)->first();
       return response()->json($hall);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $hall = hall::where('id',$id)->first();
       return response()->json($hall);
    }

    /**
     * Update the specified resource in storage.
     */








     public function update(Request $request, $id)
 {
     $data = hall::find($id);

     // Check if a new image file is uploaded
     if ($request->hasFile('images')) {
         $filepath = "hall_upload/";
         $fileName = $request->file('images')->getClientOriginalName();
         $request->file('images')->move($filepath, $fileName);

         // Delete the existing image file if it exists
         if ($data->images && file_exists($filepath . $data->images)) {
             unlink($filepath . $data->images);
         }

         $data->images = $fileName;
     }

     // Check if a new video file is uploaded
     if ($request->hasFile('video')) {
         $filepath2 = "hall_upload/";
         $fileName2 = $request->file('video')->getClientOriginalName();
         $request->file('video')->move($filepath2, $fileName2);

         // Delete the existing video file if it exists
         if ($data->video && file_exists($filepath2 . $data->video)) {
             unlink($filepath2 . $data->video);
         }

         $data->video = $fileName2;
     }

     // Update other fields
     $data->hname = $request->get('hname');
     $data->for = $request->get('for');
     $data->type = $request->get('type');
     $data->rent = $request->get('rent');
     $data->area = $request->get('area');
     $data->address = $request->get('address');
     $data->intakecap = $request->get('intakecap');
     $data->parkingcap = $request->get('parkingcap');
     $data->kitchen = $request->get('kitchen');
     $data->kitchen_material = $request->get('kitchen_material');
     $data->timings = $request->get('timings');
     $data->contact = $request->get('contact');
     $data->watersupply = $request->get('watersupply');
     $data->washers = $request->get('washers');
     $data->waiters = $request->get('waiters');
     $data->status = $request->get('status');
     $data->update();

     return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
 }

















    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $hall = hall::find($id);
        $hall->delete();
        return response()->json($hall);
    }
}
