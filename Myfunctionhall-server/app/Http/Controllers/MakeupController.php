<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\makeup;
use DB;
use App\Models\hall;
use Illuminate\Support\Facades\Storage;

class MakeupController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $makeup = makeup::get();
        return response()->json($makeup);
    }
public function makeupvendorfetch($id)
{
  $bands = makeup::where('userid', $id)->get();

 return response()->json($bands);
}


public function makeupvendorfetchfrontend($id)
{
    $user = hall::find($id);
    $user_id = $user->userid;

    $bands = DB::table('makeups')
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



    // public function store(Request $request)
    // {
    //     $arr = [];

    //     if ($request->hasFile('image')) {
    //         $file = $request->file('image');
    //         $filename = $file->getClientOriginalName();
    //         $finalName = date('His') . $filename;

    //         // Store the file in the public folder
    //         $file->move(public_path('makeup_upload'), $finalName);

    //         $makeup = new makeup([ // Updated to use "makeup" instead of "makeup"
    //             'bname' => $request->get('bname'),
    //             'image' => $finalName,
    //             'for' => $request->get('for'),
    //             'contact' => $request->get('contact'),
    //             'address' => $request->get('address'),
    //             'experience' => $request->get('experience'),
    //             'link' => $request->get('link'),
    //             'details' => $request->get('details'),
    //             'userid' => $request->get('userid'),
    //         ]);

    //         $makeup->save();

    //         $data['status'] = "success";
    //         $data['msg'] = "Data Insert";
    //         array_push($arr, $data);

    //         return response()->json($arr);
    //     }
    // }










    

    public function store(Request $request)
    {
        $arr = [];
    
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
    
            // Move the file to the destination folder using the original filename
            $file->move(public_path('makeup_upload'), $filename);
    
            $makeup = new Makeup([
                'bname' => $request->input('bname'),
                'image' => $filename,
                'for' => $request->input('for'),
                'contact' => $request->input('contact'),
                'address' => $request->input('address'),
                'experience' => $request->input('experience'),
                'link' => $request->input('link'),
                'details' => $request->input('details'),
                'userid' => $request->input('userid'),
            ]);
    
            $makeup->save();
    
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
        $makeup = makeup::where('id',$id)->first();
        return response()->json($makeup);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $makeup = makeup::where('id',$id)->first();
        return response()->json($makeup);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $arr = [];
    //
    //     $bname = $request->get('bname');
    //     $for = $request->get('for');
    //     $contact = $request->get('contact');
    //     $address = $request->get('address');
    //     $experience = $request->get('experience');
    //     $link = $request->get('link');
    //     $details = $request->get('details');
    //
    //     $makeupup = makeup::find($id);
    //
    //     if ($request->hasFile('image')) {
    //         $file = $request->file('image');
    //         $filename = $file->getClientOriginalName();
    //         $finalName = date('His') . $filename;
    //
    //         // Store the file in the public folder
    //         $file->move(public_path('makeup_upload'), $finalName);
    //
    //         $makeupup->image = $finalName;
    //     }
    //
    //     $makeupup->bname = $bname;
    //     $makeupup->for = $for;
    //     $makeupup->contact = $contact;
    //     $makeupup->address = $address;
    //     $makeupup->experience = $experience;
    //     $makeupup->link = $link;
    //     $makeupup->details = $details;
    //
    //     $makeupup->save();
    //
    //     $data['status'] = "success";
    //     $data['msg'] = "Data Updated";
    //     array_push($arr, $data);
    //
    //     return response()->json($arr);
    // }


















    public function update(Request $request, $id)
    {
        $data = makeup::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
            $filepath = "makeup_upload/";
            $fileName = $request->file('image')->getClientOriginalName();
            $request->file('image')->move($filepath, $fileName);

            // Delete the existing image file if it exists
            if ($data->image && file_exists($filepath . $data->image)) {
                unlink($filepath . $data->image);
            }

            $data->image = $fileName;
        }

        // Update other fields
        $data->bname  = $request->get('bname');
        $data->for = $request->get('for');
        $data->contact  = $request->get('contact');
        $data->address  = $request->get('address');
        $data->experience  = $request->get('experience');
        $data->link = $request->get('link');
        $data->details=$request->get('details');
        $data->userid=$request->get('userid');
        $data->update();

        return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
    }








    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $makeup = makeup::find($id);
        $makeup->delete();
        return response()->json($makeup);
    }
}
