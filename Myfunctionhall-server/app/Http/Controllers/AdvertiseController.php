<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\advertise;
use DB;
use Illuminate\Support\Facades\Storage;

class AdvertiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $advertise = advertise::get();
        return response()->json($advertise);
    }


    public function advertisevendorfetch($id)
    {
      $advertise = advertise::where('userid', $id)->get();

     return response()->json($advertise);
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
    //         $imageFile->move(public_path('advertise_upload'), $imageFileName);
    //     }

    //     // if ($request->hasFile('video')) {
    //     //     $videoFile = $request->file('video');
    //     //     $videoFileName = date('His') . $videoFile->getClientOriginalName();
    //     //
    //     //     // Store the video file in the public folder
    //     //     $videoFile->move(public_path('advertise_upload'), $videoFileName);
    //     // }

    //     $advertise = new advertise([ // Assuming the model class is "advertise"
    //         'adprovider' => $request->get('adprovider'),
    //         'adtitle' => $request->get('adtitle'),
    //         'description' => $request->get('description'),
    //         'image' => isset($imageFileName) ? $imageFileName : null,
    //         // 'video' => isset($videoFileName) ? $videoFileName : null,
    //         'adtype' => $request->get('adtype'),
    //         'ad_duration' => $request->get('ad_duration'),
    //         'contract_duration' => $request->get('contract_duration'),
    //         'video' => $request->get('video'),
    //         'userid' => $request->get('userid'),
    //     ]);

    //     $advertise->save();

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
        $imageFile->move(public_path('advertise_upload'), $imageFileName);
    }

    // if ($request->hasFile('video')) {
    //     $videoFile = $request->file('video');
    //     $videoFileName = $videoFile->getClientOriginalName();
    //
    //     // Store the video file in the public folder
    //     $videoFile->move(public_path('advertise_upload'), $videoFileName);
    // }

    $advertise = new advertise([ // Assuming the model class is "advertise"
        'adprovider' => $request->get('adprovider'),
        'adtitle' => $request->get('adtitle'),
        'description' => $request->get('description'),
        'image' => isset($imageFileName) ? $imageFileName : null,
        // 'video' => isset($videoFileName) ? $videoFileName : null,
        'adtype' => $request->get('adtype'),
        'ad_duration' => $request->get('ad_duration'),
        'contract_duration' => $request->get('contract_duration'),
        'video' => $request->get('video'),
        'userid' => $request->get('userid'),
    ]);

    $advertise->save();

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
        $advertise = advertise::where('id',$id)->first();
       return response()->json($advertise);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $advertise = advertise::where('id',$id)->first();
       return response()->json($advertise);
    }

    /**
     * Update the specified resource in storage.
     */




     public function update(Request $request, $id)
         {
             $data = Advertise::find($id);

             // Check if a new image file is uploaded
             if ($request->hasFile('image')) {
                 $filepath = "advertise_upload/";
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
             //     $filepath2 = "advertise_upload/";
             //     $fileName2 = $request->file('video')->getClientOriginalName();
             //     $request->file('video')->move($filepath2, $fileName2);
             //
             //     // Delete the existing video file if it exists
             //     if ($data->video && file_exists($filepath2 . $data->video)) {
             //         unlink($filepath2 . $data->video);
             //     }
             //
             //     $data->video = $fileName2;
             // }

             // Update other fields
             $data->adprovider = $request->get('adprovider');
             $data->adtitle = $request->get('adtitle');
             $data->description = $request->get('description');
             $data->adtype = $request->get('adtype');
             $data->ad_duration = $request->get('ad_duration');
             $data->contract_duration = $request->get('contract_duration');
              $data->video = $request->get('video');
              $data->userid = $request->get('userid');

             $data->update();

             return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
         }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $advertise = advertise::find($id);
        $advertise->delete();
        return response()->json($advertise);
    }
}
