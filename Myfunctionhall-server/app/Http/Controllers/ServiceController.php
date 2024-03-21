<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use DB;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $service = Service::get();
        return response()->json($service);
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
            $file->move(public_path('service_upload'), $finalName);

            $service = new Service([ // Updated to use "service" instead of "service"
                'name' => $request->get('name'),
                'image' => $finalName,
                'description' => $request->get('description'),
                'status' => $request->get('status'),
            ]);

            $service->save();

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
        $service = Service::where('id',$id)->first();
        return response()->json($service);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $service = Service::where('id',$id)->first();
        return response()->json($service);
    }

    /**
     * Update the specified resource in storage.
     */
    

    public function update(Request $request, $id)
    {
        $data = Service::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
        $filepath = "service_upload/";
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
         $data->status = $request->get('status');
         $data->update();

         return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $service = Service::find($id);
        $service->delete();
        return response()->json($service);
    }
}
