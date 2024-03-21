<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\profile;
use App\Models\User;
use DB;
use Illuminate\Support\Facades\Storage;

class ProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $profile = profile::get();
        return response()->json($profile);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $arr = [];

        $data = $request->validate([
            // 'categories' => 'array|required',
            // 'categories.*' => 'string',
            // 'name' => 'required|string',
            // 'email' => 'required|email',
            // 'phone' => 'required|string',
            // 'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            // 'banner' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
            // 'address' => 'required|string',
            // 'city' => 'required|string',
            // 'state' => 'required|string',
            // 'pin' => 'required|string',
            'name' => 'required|string',

        ]);

        // if ($request->hasFile('image')) {
        //     $file = $request->file('image');
        //     $filename = $file->getClientOriginalName();
        //     $finalName = date('His') . $filename;
        //     $file->move(public_path('profile_upload'), $finalName);
        //     $data['image'] = $finalName;
        // }

        // if ($request->hasFile('banner')) {
        //     $file1 = $request->file('banner');
        //     $filename1 = $file1->getClientOriginalName();
        //     $finalName1 = date('His') . $filename1;
        //     $file1->move(public_path('profile_upload'), $finalName1);
        //     $data['banner'] = $finalName1;
        // }



        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = $file->getClientOriginalName();
            $file->move(public_path('profile_upload'), $filename);
            $data['image'] = $filename;
        }
        
        if ($request->hasFile('banner')) {
            $file1 = $request->file('banner');
            $filename1 = $file1->getClientOriginalName();
            $file1->move(public_path('profile_upload'), $filename1);
            $data['banner'] = $filename1;
        }
        
        $selectedCategories = $data['categories'];

        unset($data['categories']);


        $profile = profile::create($data);

        $profile->update(['category' => json_encode($selectedCategories)]);

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
        $profile = profile::where('id',$id)->first();
        return response()->json($profile);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $profile = profile::where('id',$id)->first();
        return response()->json($profile);
    }

    /**
     * Update the specified resource in storage.
     */
//
// public function update(Request $request, $id)
// {
//   $arr = [];
//
//   $name = $request->get('name');
//   $email = $request->get('email');
//   $phone = $request->get('phone');
//   $category = $request->get('category');
//   $banner = $request->get('banner');
//   $address = $request->get('address');
//   $city = $request->get('city');
//   $state = $request->get('state');
//   $pin = $request->get('pin');
//
//   $profile = profile::find($id);
//   $profile->name = $name;
//   $profile->email = $email;
//   $profile->phone = $phone;
//   $profile->address = $address;
//   $profile->city = $city;
//   $profile->state = $state;
//   $profile->pin = $pin;
//
//   $data = $request->validate([
//       'categories' => 'array|required',
//       'categories.*' => 'string',
//       'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
//       'banner' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
//   ]);
//
//     if ($request->hasFile('image')) {
//         $file = $request->file('image');
//         $filename = $file->getClientOriginalName();
//         $finalName = date('His') . $filename;
//         $file->move(public_path('profile_upload'), $finalName);
//         if ($profile->image) {
//             $oldImagePath = public_path('profile_upload') . '/' . $profile->image;
//             if (file_exists($oldImagePath)) {
//                 unlink($oldImagePath);
//             }
//         }
//
//         $data['image'] = $finalName;
//     }
//
//
//
//     if ($request->hasFile('banner')) {
//         $file1 = $request->file('banner');
//         $filename1 = $file1->getClientOriginalName();
//         $finalName1 = date('His') . $filename1;
//         $file1->move(public_path('profile_upload'), $finalName1);
//         if ($profile1->banner) {
//             $oldBannerPath = public_path('profile_upload') . '/' . $profile1->banner;
//             if (file_exists($oldBannerPath)) {
//                 unlink($oldBannerPath);
//             }
//         }
//
//         $data['banner'] = $finalName1;
//     }
//
//
//     $selectedCategories = $data['categories'];
//
//     unset($data['categories']);
//
//     $profile->save();
//
//     $profile->update($data);
//
//     $profile->update(['category' => json_encode($selectedCategories)]);
//
//     $data['status'] = "success";
//     $data['msg'] = "Data Updated";
//     array_push($arr, $data);
//
//     return response()->json($arr);
// }



public function update(Request $request, $id)
{
  $profile = profile::where('user_id','=',$id)
  ->select('*')
  ->first();


  if (!$profile) {
      return response()->json(['status' => 'error', 'msg' => 'Profile not found'], 404);
  }

  $data = $request->validate([
      'name' => 'required|string',
      'email' => 'required|email',
      'phone' => 'required|string',
      'address' => 'required|string',
      'city' => 'required|string',
      'state' => 'required|string',
      'pin' => 'required|string',
      'categories' => 'array|required',
      // 'image' => 'image',
      // 'banner' => 'banner',
  ]);

  $profile->name = $data['name'];
  $profile->email = $data['email'];
  $profile->phone = $data['phone'];
  $profile->address = $data['address'];
  $profile->city = $data['city'];
  $profile->state = $data['state'];
  $profile->pin = $data['pin'];


    if ($request->hasFile('image')) {
        $file = $request->file('image');
        $filename = $file->getClientOriginalName();
        
        $file->move(public_path('profile_upload'), $filename);
        if ($profile->image) {
            $oldImagePath = public_path('profile_upload') . '/' . $profile->image;
            if (file_exists($oldImagePath)) {
                unlink($oldImagePath);
            }
        }

        $profile->image = $filename;
    }

    if ($request->hasFile('banner')) {
        $file1 = $request->file('banner');
        $filename1 = $file1->getClientOriginalName();
        $file1->move(public_path('profile_upload'), $filename1);
        if ($profile->banner) {
            $oldBannerPath = public_path('profile_upload') . '/' . $profile->banner;
            if (file_exists($oldBannerPath)) {
                unlink($oldBannerPath);
            }
        }

        $profile->banner = $filename1;
    }

    $profile->save();

     $profile->category = json_encode($data['categories']);
    $profile->save();

    $user = User::find($id);

    $user->name = $request->get('name');
    $user->email = $request->get('email');

    $user->update();

    return response()->json(['status' => 'success', 'msg' => 'Profile data updated']);
}




    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $profile = profile::find($id);
        $profile->delete();
        return response()->json($profile);
    }

    public function fetchuser(Request $request,$id){
      $datau=Profile::where('email','=',$id)->select('*')->first();
      return $datau;
    }


    public function perticularuser(Request $request,$id)

    {
        echo $id;
        // $request->profile();
       $datau=profile::where('id','=',$id)->select('*')->get();
      // return $datau;
       return response()->json($datau);
    }
}
