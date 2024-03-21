<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\marketing;
use DB;
use Illuminate\Support\Facades\Storage;

class MarketingController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $marketing = marketing::get();
        return response()->json($marketing);
    }
    public function marketingvendorfetch($id)
    {
      $market = marketing::where('userid', $id)->get();

     return response()->json($market);
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














    //  public function store(Request $request)
    //  {
    //    //$user=$request->user();
    //      $arr = [];
 
    //      if ($request->hasFile('testimonial_img')) {
    //          $file = $request->file('testimonial_img');
    //          $filename = $file->getClientOriginalName();
    //          $finalName = date('His') . $filename;
 
    //          // Store the file in the public folder
    //          $file->move(public_path('marketing_upload'), $finalName);
 
    //          $addon = new marketing([ // Updated to use "addon" instead of "addon"
    //         'client' => $request->get('client'),
    //         'contact' => $request->get('contact'),
    //         'email' => $request->get('email'),
    //         'adtitle' => $request->get('adtitle'),
    //         'description' => $request->get('description'),
    //         'testimonial_img' => $finalName,
    //         //'video' => isset($videoFileName) ? $videoFileName : null,
    //         'length' => $request->get('length'),
    //         'video' => $request->get('video'),
    //         'contract' => $request->get('contract'),
    //         'status' => $request->get('status'),
    //          ]);
 
    //          $addon->save();
 
    //          $data['status'] = "success";
    //          $data['msg'] = "Data Insert";
    //          array_push($arr, $data);
 
    //          return response()->json($arr);
    //      }
    //  }





    public function store(Request $request)
{
    $arr = [];

    if ($request->hasFile('image')) {
        $imageFile = $request->file('image');
        // $imageFileName = date('His') . $imageFile->getClientOriginalName();
        $imageFileName = $imageFile->getClientOriginalName();
        // Store the image file in the public folder
        $imageFile->move(public_path('marketing_upload'), $imageFileName);
    }

    $marketing = new Marketing([
        'client' => $request->get('client'),
        'contact' => $request->get('contact'),
        'email' => $request->get('email'),
        'adtitle' => $request->get('adtitle'),
        'description' => $request->get('description'),
        'image' => isset($imageFileName) ? $imageFileName : null,
        'length' => $request->get('length'),
        'video' => $request->get('video'),
        'contract' => $request->get('contract'),
        'status' => $request->get('status'),
        'userid' => $request->input('userid')
    ]);

    $marketing->save();

    $data['status'] = "success";
    $data['msg'] = "Data Insert";
    array_push($arr, $data);

    return response()->json($arr);
}






















    // public function store(Request $request)
    // {
    //     $arr = [];

    //     if ($request->hasFile('image')) {
    //         $imageFile = $request->file('image');
    //         $imageFileName = date('His') . $imageFile->getClientOriginalName();

    //         // Store the image file in the public folder
    //         $imageFile->move(public_path('marketing_upload'), $imageFileName);
    //     }

    //     // if ($request->hasFile('video')) {
    //     //     $videoFile = $request->file('video');
    //     //     $videoFileName = date('His') . $videoFile->getClientOriginalName();
    //     //
    //     //     // Store the video file in the public folder
    //     //     $videoFile->move(public_path('marketing_upload'), $videoFileName);
    //     // }

    //     $marketing = new marketing([ // Assuming the model class is "marketing"
    //         'client' => $request->get('client'),
    //         'contact' => $request->get('contact'),
    //         'email' => $request->get('email'),
    //         'adtitle' => $request->get('adtitle'),
    //         'description' => $request->get('description'),
    //         'image' => isset($imageFileName) ? $imageFileName : null,
    //         //'video' => isset($videoFileName) ? $videoFileName : null,
    //         'length' => $request->get('length'),
    //         'video' => $request->get('video'),
    //         'contract' => $request->get('contract'),
    //         'status' => $request->get('status'),
    //     ]);

    //     $marketing->save();

    //     $data['status'] = "success";
    //     $data['msg'] = "Data Insert";
    //     array_push($arr, $data);

    //     return response()->json($arr);
    // }































    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $marketing = marketing::where('id',$id)->first();
       return response()->json($marketing);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $marketing = marketing::where('id',$id)->first();
       return response()->json($marketing);
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $arr = [];
    //
    //     $client = $request->get('client');
    //     $contact = $request->get('contact');
    //     $email = $request->get('email');
    //     $adtitle = $request->get('adtitle');
    //     $description = $request->get('description');
    //     $length = $request->get('length');
    //     $contract = $request->get('contract');
    //     $status = $request->get('status');
    //
    //     $marketingup = marketing::find($id); // Assuming the model class is "marketing"
    //
    //     if ($request->hasFile('image')) {
    //         $imageFile = $request->file('image');
    //         $imageFileName = date('His') . $imageFile->getClientOriginalName();
    //
    //         // Store the image file in the public folder
    //         $imageFile->move(public_path('marketing_upload'), $imageFileName);
    //
    //         $marketingup->image = $imageFileName;
    //     }
    //
    //     if ($request->hasFile('video')) {
    //         $videoFile = $request->file('video');
    //         $videoFileName = date('His') . $videoFile->getClientOriginalName();
    //
    //         // Store the video file in the public folder
    //         $videoFile->move(public_path('marketing_upload'), $videoFileName);
    //
    //         $marketingup->video = $videoFileName;
    //     }
    //
    //     $marketingup->client = $client;
    //     $marketingup->contact = $contact;
    //     $marketingup->email = $email;
    //     $marketingup->adtitle = $adtitle;
    //     $marketingup->description = $description;
    //     $marketingup->length = $length;
    //     $marketingup->contract = $contract;
    //     $marketingup->status = $status;
    //
    //     $marketingup->save();
    //
    //     $data['status'] = "success";
    //     $data['msg'] = "Data Updated";
    //     array_push($arr, $data);
    //
    //     return response()->json($arr);
    // }








        public function update(Request $request, $id)
     {

        $data = marketing::find($id);

        // Check if a new image file is uploaded
        if ($request->hasFile('image')) {
            $filepath = "marketing_upload/";
            $fileName = $request->file('image')->getClientOriginalName();
            $request->file('image')->move($filepath, $fileName);

            // Delete the existing image file if it exists
            if ($data->image && file_exists($filepath . $data->image)) {
                unlink($filepath . $data->image);
            }

            $data->image = $fileName;
        }

        // Update other fields

                $data->client=$request->get('client');
               $data->contact=$request->get('contact');
               $data->email=$request->get('email');
               $data->adtitle=$request->get('adtitle');
               $data->description=$request->get('description');
               $data->length=$request->get('length');
               $data->contract=$request->get('contract');
               $data->status=$request->get('status');
                $data->video=$request->get('video');
                  $data->userid=$request->get('userid');
               $data->update();

        return response()->json(['status' => 'success', 'msg' => 'Data Updated']);
     }











    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $marketing = marketing::find($id);
        $marketing->delete();
        return response()->json($marketing);
    }
}
