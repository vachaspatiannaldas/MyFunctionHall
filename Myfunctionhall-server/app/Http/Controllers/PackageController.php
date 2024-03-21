<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\package;
use DB;
use Illuminate\Support\Facades\Storage;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $package = package::get();
        return response()->json($package);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
      
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $arr = [];

            $package = new package([ 
                'days' => $request->get('days'),
                'amount' => $request->get('amount'),
                'details' => $request->get('details'),
            ]);

            $package->save();

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
         $package = package::where('id',$id)->first();
        return response()->json($package);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
         $package = package::where('id',$id)->first();
        return response()->json($package);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $arr = [];
    
        $days = $request->get('days');
        $amount = $request->get('amount');
        $details = $request->get('details');
    
        $packageup = package::find($id);
    
        $packageup->days = $days;
        $packageup->amount = $amount;
        $packageup->details = $details;
    
        $packageup->save();
    
        $data['status'] = "success";
        $data['msg'] = "Data Updated";
        array_push($arr, $data);
    
        return response()->json($arr);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $package = package::find($id);
        $package->delete();
        return response()->json($package);
    }
}
