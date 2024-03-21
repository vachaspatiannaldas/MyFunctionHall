<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\testimonial;
use DB;
use Illuminate\Support\Facades\Storage;

class TestimonialController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $testimonial = testimonial::get();
        return response()->json($testimonial);
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
            $finalName = date('His') . $filename;

            // Store the file in the public folder
            $file->move(public_path('testimonial_upload'), $finalName);

            $testimonial = new testimonial([ // Updated to use "testimonial" instead of "testimonial"
                'name' => $request->get('name'),
                'image' => $finalName,
                'description' => $request->get('description'),
            ]);

            $testimonial->save();

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
        $testimonial = testimonial::where('id',$id)->first();
        return response()->json($testimonial);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $testimonial = testimonial::where('id',$id)->first();
        return response()->json($testimonial);
    }

    /**
     * Update the specified resource in storage.
     */
    

    public function update(Request $request, $id)
    {
        $data = testimonial::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
        $filepath = "testimonial_upload/";
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
         $data->description = $request->get('description');
         $data->update();

         return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $testimonial = testimonial::find($id);
        $testimonial->delete();
        return response()->json($testimonial);
    }
}
