<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\hall;
use DB;
use Illuminate\Support\Facades\Storage;

class HallController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $hall = hall::get();
        return response()->json($hall);
    }

    public function hallvendorfetch($id)
    {
      $hall = hall::where('userid',$id)->get();
      return response()->json($hall);
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
    // {
    //     $arr = [];

    //     $imageFileNames = [];
    //     if ($request->hasFile('images')) {
    //         foreach ($request->file('images') as $imageFile) {
    //             $imageFileName = date('His') . $imageFile->getClientOriginalName();

    //             $imageFile->move(public_path('hall_upload'), $imageFileName);

    //             $imageFileNames[] = $imageFileName;
    //         }
    //     }



    //     $hall = new hall([
    //         'hname' => $request->get('hname'),
    //         'for' => $request->get('for'),
    //         'type' => $request->get('type'),
    //         'rent' => $request->get('rent'),
    //         'area' => $request->get('area'),
    //         'address' => $request->get('address'),
    //         'intakecap' => $request->get('intakecap'),
    //         'parkingcap' => $request->get('parkingcap'),
    //         'kitchen' => $request->get('kitchen'),
    //         'kitchen_material' => $request->get('kitchen_material'),
    //         'timings' => $request->get('timings'),
    //         'images' => json_encode($imageFileNames),
    //         'contact' => $request->get('contact'),
    //         'watersupply' => $request->get('watersupply'),
    //         'washers' => $request->get('washers'),
    //         'waiters' => $request->get('waiters'),
    //         'status' => $request->get('status'),
    //         'category' => json_encode($request->get('categories', [])),
    //         'price' => $request->get('price'),
    //         'capacity' => $request->get('capacity'),
    //         'video' => $request->get('video'),
    //         'userid'=>$request->get('userid'),
    //     ]);

    //     $hall->save();

    //     $data['status'] = "success";
    //     $data['msg'] = "Data Insert";
    //     array_push($arr, $data);

    //     return response()->json($arr);

    //   }





    public function store(Request $request)
{
    $arr = [];

    $imageFileNames = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $imageFile) {
            $imageFileName = $imageFile->getClientOriginalName();

            $imageFile->move(public_path('hall_upload'), $imageFileName);

            $imageFileNames[] = $imageFileName;
        }
    }

    $hall = new hall([
        'hname' => $request->get('hname'),
        'for' => $request->get('for'),
        'type' => $request->get('type'),
        'rent' => $request->get('rent'),
        'area' => $request->get('area'),
        'address' => $request->get('address'),
        'intakecap' => $request->get('intakecap'),
        'parkingcap' => $request->get('parkingcap'),
        'kitchen' => $request->get('kitchen'),
        'kitchen_material' => $request->get('kitchen_material'),
        'timings' => $request->get('timings'),
        'images' => json_encode($imageFileNames),
        'contact' => $request->get('contact'),
        'watersupply' => $request->get('watersupply'),
        'washers' => $request->get('washers'),
        'waiters' => $request->get('waiters'),
        'status' => $request->get('status'),
        'category' => json_encode($request->get('categories', [])),
        'price' => $request->get('price'),
        'capacity' => $request->get('capacity'),
        'video' => $request->get('video'),
        'userid' => $request->get('userid'),
    ]);

    $hall->save();

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
          $hall = hall::where('id',$id)->first();
         return response()->json($hall);
      }

    /**
     * Show the form for editing the specified resource.
     */
     public function edit(string $id)
      {
          $hall = hall::where('id',$id)->first();
         return response()->json($hall);
      }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, string $id)
    // {
    //     $arr = [];

    //     $hname = $request->get('hname');
    //     $for = $request->get('for');
    //     $type = $request->get('type');
    //     $rent = $request->get('rent');
    //     $area = $request->get('area');
    //     $address = $request->get('address');
    //     $intakecap = $request->get('intakecap');
    //     $parkingcap = $request->get('parkingcap');
    //     $kitchen = $request->get('kitchen');
    //     $kitchen_material = $request->get('kitchen_material');
    //     $timings = $request->get('timings');
    //     $contact = $request->get('contact');
    //     $watersupply = $request->get('watersupply');
    //     $washers = $request->get('washers');
    //     $waiters = $request->get('waiters');
    //     $status = $request->get('status');
    //     $category = $request->get('category');
    //     $price = $request->get('price');
    //     $capacity = $request->get('capacity');

    //     $hallup = hall::find($id); // Assuming the model class is "hall"

    //    if ($request->hasFile('images')) {
    //     foreach ($request->file('images') as $imageFile) {
    //         $imageFileName = date('His') . $imageFile->getClientOriginalName();

    //         // Store the image file in the public folder
    //         $imageFile->move(public_path('hall_upload'), $imageFileName);

    //         // Add the image file name to the array
    //         $imageFileNames[] = $imageFileName;
    //     }
    // }










//origial code


     public function update(Request $request, string $id)
    {
        $hall = Hall::find($id);

        if (!$hall) {
            return response()->json(['message' => 'Hall not found'], 404);
        }

        $data = $request->all();
         $categories = $request->get('categories');
        $hall->category=$categories;
        $hall->hname = $data['hname'] ?? $hall->hname;
        $hall->for = $data['for'] ?? $hall->for;
        $hall->type = $data['type'] ?? $hall->type;
        $hall->rent = $data['rent'] ?? $hall->rent;
        $hall->area = $data['area'] ?? $hall->area;
        $hall->address = $data['address'] ?? $hall->address;
        $hall->intakecap = $data['intakecap'] ?? $hall->intakecap;
        $hall->parkingcap = $data['parkingcap'] ?? $hall->parkingcap;
        $hall->kitchen = $data['kitchen'] ?? $hall->kitchen;
        $hall->kitchen_material = $data['kitchen_material'] ?? $hall->kitchen_material;
        $hall->timings = $data['timings'] ?? $hall->timings;
        $hall->contact = $data['contact'] ?? $hall->contact;
        $hall->watersupply = $data['watersupply'] ?? $hall->watersupply;
        $hall->washers = $data['washers'] ?? $hall->washers;
        $hall->waiters = $data['waiters'] ?? $hall->waiters;
        $hall->status = $data['status'] ?? $hall->status;
        $hall->price = $data['price'] ?? $hall->price;
        $hall->capacity = $data['capacity'] ?? $hall->capacity;
        $hall->video = $data['video'] ?? $hall->video;
        $hall->userid=$data['userid'] ?? $hall->userid;


        if ($request->hasFile('images')) {
            $imageFileNames = [];

            foreach ($request->file('images') as $imageFile) {
                $imageFileName = date('His') . $imageFile->getClientOriginalName();

                $imageFile->move(public_path('hall_upload'), $imageFileName);

                $imageFileNames[] = $imageFileName;
            }

            $hall->images = $imageFileNames;
        }


        $hall->save();

        return response()->json(['message' => 'Hall updated successfully'], 200);
    }



























//
//
//     public function update(Request $request, string $id)
// {
//     $hall = Hall::find($id);
//
//     if (!$hall) {
//         return response()->json(['message' => 'Hall not found'], 404);
//     }
//
//     $data = $request->all();
//     $categories = $request->get('categories');
//     $hall->category = $categories;
//
//     // Handle image replacement
//     if ($request->hasFile('images')) {
//          if (!empty($hall->images)) {
//              // Delete the existing image file(s)
//              foreach ($hall->images as $imageName) {
//                  $imagePath = public_path('hall_upload') . '/' . $imageName;
//                  if (file_exists($imagePath)) {
//                      unlink($imagePath);
//                  }
//              }
//          }
//
//          $imageFileNames = [];
//
//          foreach ($request->file('images') as $imageFile) {
//              $imageFileName = date('His') . $imageFile->getClientOriginalName();
//
//              $imageFile->move(public_path('hall_upload'), $imageFileName);
//
//              $imageFileNames[] = $imageFileName;
//          }
//
//          $hall->images = $imageFileNames;
//      }
//
//
//     // Update other fields
//     $hall->hname = $data['hname'] ?? $hall->hname;
//     $hall->for = $data['for'] ?? $hall->for;
//     $hall->type = $data['type'] ?? $hall->type;
//     $hall->rent = $data['rent'] ?? $hall->rent;
//     $hall->area = $data['area'] ?? $hall->area;
//     $hall->address = $data['address'] ?? $hall->address;
//     $hall->intakecap = $data['intakecap'] ?? $hall->intakecap;
//     $hall->parkingcap = $data['parkingcap'] ?? $hall->parkingcap;
//     $hall->kitchen = $data['kitchen'] ?? $hall->kitchen;
//     $hall->kitchen_material = $data['kitchen_material'] ?? $hall->kitchen_material;
//     $hall->timings = $data['timings'] ?? $hall->timings;
//     $hall->contact = $data['contact'] ?? $hall->contact;
//     $hall->watersupply = $data['watersupply'] ?? $hall->watersupply;
//     $hall->washers = $data['washers'] ?? $hall->washers;
//     $hall->waiters = $data['waiters'] ?? $hall->waiters;
//     $hall->status = $data['status'] ?? $hall->status;
//     $hall->price = $data['price'] ?? $hall->price;
//     $hall->capacity = $data['capacity'] ?? $hall->capacity;
//     $hall->video = $data['video'] ?? $hall->video;
//
//     $hall->save();
//
//     return response()->json(['message' => 'Hall updated successfully'], 200);
// }
//
//
















































    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $hall = hall::find($id);
        $hall->delete();
        return response()->json($hall);
    }
}
