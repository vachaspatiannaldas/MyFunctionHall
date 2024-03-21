<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Hash;

use DB;
use App\Models\Register;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
      $register = Register::get();
      return response()->json($register);

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
      $full_name=$request->get('full_name');
     $email=$request->get('email');
     $address=$request->get('address');
     $landmark=$request->get('landmark');
     $city=$request->get('city');
     $state=$request->get('state');
     $tehsil=$request->get('tehsil');
     $pin=$request->get('pin');
     $mobile=$request->get('mobile');
     $pan=$request->get('pan');
     $upi=$request->get('upi');
     $ref=$request->get('ref');
     $password=Hash::make($request->input('password'));
     $status=$request->get('status');
     $under_ref=$request->get('under_ref');
     $pstatus=$request->get('pstatus');

     $arr=array();
     $register = new Register([
         'full_name'=>$full_name,
         'email'=>$email,
         'address'=>$address,
         'landmark'=>$landmark,
         'city'=>$city,
         'state'=>$state,
         'pin'=>$pin,
         'mobile'=>$mobile,
         'pan'=>$pan,
         'upi'=>$upi,
         'password'=>$password,
         'status'=>$status,
     ]);
     $register->save();
     $data['status']="success";
     $data['msg']="data Insert";
     array_push($arr,$data);
     return response()->json($arr);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
      $register = Register::where('id',$id)->first();
    return response()->json($register);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
      $arr=array();
     $full_name=$request->get('full_name');
     $email=$request->get('email');
     $address=$request->get('address');
     $landmark=$request->get('landmark');
     $city=$request->get('city');
     $state=$request->get('state');
     $pin=$request->get('pin');
     $mobile=$request->get('mobile');
     $pan=$request->get('pan');
     $upi=$request->get('upi');
     $password=$request->get('password');
     $status=$request->get('status');

     $registerup=Register::find($id);
     $registerup->full_name=$full_name;
     $registerup->email=$email;
     $registerup->address=$address;
     $registerup->landmark=$landmark;
     $registerup->city=$city;
     $registerup->state=$state;
     $registerup->pin=$pin;
     $registerup->mobile=$mobile;
     $registerup->pan=$pan;
     $registerup->upi=$upi;
     $registerup->password=$password;
     $registerup->status=$status;
      $registerup->save();
     $data['status']="success";
     $data['msg']="data Updated";
     array_push($arr,$data);
     return response()->json($arr);
    }

    /**
     * Remove the specified resource from storage.
     */
     public function destroy($id)
      {
          $register = Register::find($id);
          $register->delete();
          return response()->json($register);
      }




    public function login(Request $request)
  {
      $user = Register::where('email', $request->email)->first();
      if (!$user) {
          return response()->json(["error" => "User not found"], 404);
      }

      if (!Hash::check($request->password, $user->password)) {
          return response()->json(["error" => "Email and Password Not Matched"], 401);
      }

      $data['status'] = "success";
      $data['msg'] = "Login successful";
      $data['user'] = $user;
      return response()->json([$data], 200);
  }


}
