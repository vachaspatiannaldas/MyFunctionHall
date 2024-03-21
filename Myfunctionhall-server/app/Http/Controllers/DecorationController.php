<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\decoration;
use DB;
use App\Models\hall;

use Illuminate\Support\Facades\Storage;

class DecorationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $decoration = decoration::get();
        return response()->json($decoration);
    }

public function decorationvendorfetch($id)
{
  $decoration = decoration::where('userid',$id)->get();
  return response()->json($decoration);
}

public function decorationvendorfetchfrontend($id)
{
    $user = hall::find($id);
    $user_id = $user->userid;

    $bands = DB::table('decorations')
        ->select('*')
        ->where('userid', $user_id)
        ->get();

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
    
        if ($request->hasFile('image')) {
            $imageFile = $request->file('image');
            $imageFileName = $imageFile->getClientOriginalName();
    
            // Store the image file in the public folder
            $imageFile->move(public_path('decoration_upload'), $imageFileName);
        }
    
        $decoration = new decoration([ // Assuming the model class is "decoration"
            'name' => $request->get('name'),
            'type' => $request->get('type'),
            'contact' => $request->get('contact'),
            'address' => $request->get('address'),
            'image' => isset($imageFileName) ? $imageFileName : null,
            'details' => $request->get('details'),
            'video' => $request->get('video'),
            'userid' => $request->get('userid'),
        ]);
    
        $decoration->save();
    
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
        $decoration = decoration::where('id',$id)->first();
       return response()->json($decoration);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $decoration = decoration::where('id',$id)->first();
       return response()->json($decoration);
    }

    /**
     * Update the specified resource in storage.
     */


     public function update(Request $request, $id)
    {
        $data = decoration::find($id);

        if ($request->hasFile('image')) {
        $filepath = "decoration_upload/";
        $fileName = $request->file('image')->getClientOriginalName();
        $request->file('image')->move($filepath, $fileName);

        // Delete the existing image file if it exists
        if ($data->image && file_exists($filepath . $data->image)) {
        unlink($filepath . $data->image);
        }

        $data->image = $fileName;
         }

        // if ($request->hasFile('video')) {
        // $filepath1 = "decoration_upload/";
        // $fileName1 = $request->file('video')->getClientOriginalName();
        // $request->file('video')->move($filepath1, $fileName1);
        //
        // // Delete the existing video file if it exists
        // if ($data->video && file_exists($filepath1 . $data->video)) {
        // unlink($filepath1 . $data->video);
        // }
        //
        // $data->video = $fileName1;
        //  }

         // Update other fields
         $data->name = $request->get('name');
         $data->type = $request->get('type');
         $data->contact = $request->get('contact');
         $data->address = $request->get('address');
         $data->details = $request->get('details');
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
        $decoration = decoration::find($id);
        $decoration->delete();
        return response()->json($decoration);
    }
}
