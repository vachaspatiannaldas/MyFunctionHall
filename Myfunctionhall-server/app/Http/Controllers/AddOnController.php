<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Validator;

use Illuminate\Http\Request;
use App\Models\addon;
use DB;
use Illuminate\Support\Facades\Storage;


class AddOnController extends Controller
{
    /**
     * Display a listing of the resource.
     */
  public function index(Request $request)
    {
      $perPage = $request->input('perPage', 50); // Number of records per page
    $addons = addon::paginate($perPage);
    return response()->json($addons);
    }

    public function addonvendorfetch($id)
    {
      $bands = addon::where('userid', $id)->get();

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
      //$user=$request->user();
        $arr = [];

        // if ($request->hasFile('testimonial_img')) {
        //     $file = $request->file('testimonial_img');
        //     $filename = $file->getClientOriginalName();
        //     $finalName = date('His') . $filename;


        //     // Store the file in the public folder
        //     $file->move(public_path('addon_upload'), $finalName);

        //     $addon = new addon([ // Updated to use "addon" instead of "addon"
        //         'role' => $request->get('role'),
        //         'name' => $request->get('name'),
        //         'contact' => $request->get('contact'),
        //         'email' => $request->get('email'),
        //         'address' => $request->get('address'),
        //         'ratings' => $request->get('ratings'),
        //         'testimonial_img' => $finalName,
        //         'eventhistory' => $request->get('eventhistory'),
        //         'userid' => $request->get('userid'),
        //     ]);

        //     $addon->save();

        //     $data['status'] = "success";
        //     $data['msg'] = "Data Insert";
        //     array_push($arr, $data);

        //     return response()->json($arr);
        // }




        if ($request->hasFile('testimonial_img')) {
            $file = $request->file('testimonial_img');
            $filename = $file->getClientOriginalName();
        
            // Store the file in the public folder
            $file->move(public_path('addon_upload'), $filename);
        
            $addon = new addon([ // Updated to use "addon" instead of "addon"
                'role' => $request->get('role'),
                'name' => $request->get('name'),
                'contact' => $request->get('contact'),
                'email' => $request->get('email'),
                'address' => $request->get('address'),
                'ratings' => $request->get('ratings'),
                'testimonial_img' => $filename, // Use the original filename
                'eventhistory' => $request->get('eventhistory'),
                'userid' => $request->get('userid'),
            ]);
        
            $addon->save();
        
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
       $addon = addon::where('id',$id)->first();
       return response()->json($addon);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $addon = addon::where('id',$id)->first();
       return response()->json($addon);
    }


    public function update(Request $request, $id)
    {
        $data = addon::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('testimonial_img')) {
            $filepath = "addon_upload/";
            $fileName = $request->file('testimonial_img')->getClientOriginalName();
            $request->file('testimonial_img')->move($filepath, $fileName);

            // Delete the existing image file if it exists
            if ($data->testimonial_img && file_exists($filepath . $data->testimonial_img)) {
                unlink($filepath . $data->testimonial_img);
            }

            $data->testimonial_img = $fileName;
        }

        // Update other fields
        $data->role = $request->get('role');
        $data->name = $request->get('name');
        $data->contact = $request->get('contact');
        $data->email = $request->get('email');
        $data->address = $request->get('address');
        $data->ratings = $request->get('ratings');
        $data->eventhistory = $request->get('eventhistory');
        $data->userid = $request->get('userid');
        $data->update();

        return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }



    /**
     * Update the specified resource in storage.
     */

 // ...




 //public function update(Request $request, $id)
 //{

   // $filepath="addon_upload/";
   // $filename = $request->file('testimonial_img');
   // $fileName = $fileName->getClientOriginalName();
   // $fileName->move($filepath,$fileName);
   //
   // $data = Addon::find($id);
   // $data->name=$request->get('fname');
   // data->contact = $request->get('contact');
   // $data->email = $request->get('email');
   // $data->address = $request->get('address');
   // $data->ratings = $request->get('ratings');
   // $data->eventhistory = $request->get('eventhistory');
   // $data->testimonial_img=$fileName;
   // $data->update();
   // return response()->json(['status' => 'success', 'msg' => 'Data Updated']);



     // $data = Addon::find($id);
     // if (!$data) {
     //     return response()->json(['status' => 'error', 'msg' => 'Addon not found'], 404);
     // }
     //
     // $data->role = $request->input('role');
     // $data->name = $request->input('name');
     // $data->contact = $request->input('contact');
     // $data->email = $request->input('email');
     // $data->address = $request->input('address');
     // $data->ratings = $request->input('ratings');
     // $data->eventhistory = $request->input('eventhistory');
     //
     // if ($request->hasFile('testimonial_img') && $request->file('testimonial_img')->isValid()) {
     //     // Delete the old file before updating with the new one
     //     if ($data->testimonial_img && Storage::disk('public')->exists($data->testimonial_img)) {
     //         Storage::disk('public')->delete($data->testimonial_img);
     //     }
     //
     //     $filename = $request->file('testimoni al_img')->store('addon_upload', 'public');
     //     $data->testimonial_img = $filename;
     // }
     //
     // $data->save();
     //


 //
 //      echo "Updated";
 //     return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
 //
 //
 // }






    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $addon = addon::find($id);
        $addon->delete();
        return response()->json($addon);
    }
}
