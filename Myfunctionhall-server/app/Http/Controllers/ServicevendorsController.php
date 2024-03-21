<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\servicevendor;
use App\Models\Service;
use DB;
use Illuminate\Support\Facades\Storage;

class ServicevendorsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $servicevendors = servicevendor::get();
        return response()->json($servicevendors);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    public function Serviceget()
    {
      $service=Service::get();
      return response()->json($service);
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
            $file->move(public_path('servicevendors_upload'), $finalName);

            $servicevendors = new servicevendor([ // Updated to use "servicevendors" instead of "servicevendors"
                'name' => $request->get('name'),
                'ownername' => $request->get('ownername'),
                'image' => $finalName,
                'details' => $request->get('details'),
                'contact' => $request->get('contact'),
                'status' => $request->get('status'),
                'sid' => $request->get('sid'),
            ]);

            $servicevendors->save();

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
        $servicevendors = servicevendor::where('id',$id)->first();
        return response()->json($servicevendors);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $servicevendors = servicevendor::where('id',$id)->first();
        return response()->json($servicevendors);
    }

    /**
     * Update the specified resource in storage.
     */
    

    public function update(Request $request, $id)
    {
        $data = servicevendor::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
        $filepath = "servicevendors_upload/";
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
         $data->ownername = $request->get('ownername');
         $data->details = $request->get('details');
         $data->contact = $request->get('contact');
         $data->status = $request->get('status');
         $data->update();

         return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $servicevendors = servicevendor::find($id);
        $servicevendors->delete();
        return response()->json($servicevendors);
    }
}
