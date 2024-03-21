<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\adslider;
use DB;
use Illuminate\Support\Facades\Storage;

class AdsliderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $adslider = adslider::get();
        return response()->json($adslider);
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
          $imageFile->move(public_path('adslider_upload'), $imageFileName);
      }

      if ($request->hasFile('videos')) {
          $videoFile = $request->file('videos');
          $videoFileName = date('His') . $videoFile->getClientOriginalName();
          $videoFile->move(public_path('adslider_upload'), $videoFileName);
      }

      $adslider = new adslider([
          'hallid' => $request->input('hallid'),
          'images' => isset($imageFileName) ? $imageFileName : null,
          'videos' => isset($videoFileName) ? $videoFileName : null,
      ]);

      $adslider->save();

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
        $adslider = adslider::where('id',$id)->first();
       return response()->json($adslider);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $adslider = adslider::where('id',$id)->first();
       return response()->json($adslider);
    }

    /**
     * Update the specified resource in storage.
     */

     public function update(Request $request, $id)
 {
     $data = adslider::find($id);

     // Check if a new image file is uploaded
     if ($request->hasFile('images')) {
         $filepath = "adslider_upload/";
         $fileName = $request->file('images')->getClientOriginalName();
         $request->file('images')->move($filepath, $fileName);

         // Delete the existing image file if it exists
         if ($data->images && file_exists($filepath . $data->images)) {
             unlink($filepath . $data->images);
         }

         $data->images = $fileName;
     }

     // Check if a new video file is uploaded
     if ($request->hasFile('videos')) {
         $filepath2 = "adslider_upload/";
         $fileName2 = $request->file('videos')->getClientOriginalName();
         $request->file('videos')->move($filepath2, $fileName2);

         // Delete the existing video file if it exists
         if ($data->videos && file_exists($filepath2 . $data->videos)) {
             unlink($filepath2 . $data->videos);
         }

         $data->videos = $fileName2;
     }

     // Update other fields
     $data->hallid = $request->get('hallid');
     $data->update();

     return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
 }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $adslider = adslider::find($id);
        $adslider->delete();
        return response()->json($adslider);
    }
}
