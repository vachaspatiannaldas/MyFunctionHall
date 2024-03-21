<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\tag;
use DB;
use Illuminate\Support\Facades\Storage;

class TagController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $tag = tag::get();
        return response()->json($tag);
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

            $tag = new tag([ 
                'name' => $request->get('name'),
                'status' => $request->get('status')
            ]);

            $tag->save();

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
        $tag = tag::where('id',$id)->first();
        return response()->json($tag);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $tag = tag::where('id',$id)->first();
        return response()->json($tag);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $arr = [];
    
        $name = $request->get('name');
        $status = $request->get('status');
    
        $tagup = tag::find($id);
    
        $tagup->name = $name;
        $tagup->status = $status;
    
        $tagup->save();
    
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
        $tag = tag::find($id);
        $tag->delete();
        return response()->json($tag);
    }
}
