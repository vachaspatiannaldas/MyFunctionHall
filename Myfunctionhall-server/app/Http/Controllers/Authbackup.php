<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\User;
use App\Models\profile;


class AuthController extends Controller
{


//login

    
  public function login(Request $request)
  {
    $credentials = $request->only('email', 'password');

    if (Auth::attempt($credentials)) {
    $user = Auth::user();
    $token = $user->createToken('authToken')->plainTextToken;
    $usertype = $user->usertype; // Assuming 'usertype' is a field in your User model
    $name = $user->name;
    $email = $user->email;

    return response()->json(['token' => $token, 'usertype' => $usertype, 'name' => $name,'email' => $email], 200);
}

     return response()->json(['message' => 'Invalid credentials'], 401);
  }




//post

  public function register(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required',
        'confirm_password' => 'required|same:password',
    ]);

    if($validator->fails()){
        return $this->sendError('Error validation', $validator->errors());
    }
    $arr=array();
    $input = $request->all();
    $input['password'] = bcrypt($input['password']);

    // $user = new User ([
    //     'name'=> $request->get('name'),
    //     'email'=> $request->get('email'),
    //     'token'=> createToken('MyAuthApp')->plainTextToken,
    // ]);

    $user = User::create($input);
    $success['token'] =  $user->createToken('MyAuthApp')->plainTextToken;
    $success['name'] =  $user->name;


    // $user1 = profile::create($input);
    // $success1['name'] =  $user1->name;
    // $success1['email'] =  $user1->email;

    // $success1['user_id'] = $user1->user->id;

    $id = User::select('*')->orderBy('id','desc')->first();

    $user_id = $id->id;

    $success['id'] = $user_id;
    // return $user_id;
    
    $profile = new Profile([
        'name'=>$request->name,
        'email'=>$request->email,
        'user_id'=>$user_id
    ]);

    // $user1->save();
    // $user->save();

    $profile->save();




// $name=$input['name'];
// $email=$input['email'];
//
//         $profile = new profile([
//           'name'=>$name,
//           'email'=>$email
//         ])
//         $profile->save();

    $success['status']="success";
    $success['msg']="User created successfully.";
    array_push($arr,$success);
        //return $this->sendResponse($success, 'User created successfully.');
    return response()->json($arr);
}


public function getauthdata(Request $request)
{
  $user=$request->user();
  echo $user->email;
}






public function adminindex()
{
  $admin = user::get();
  return response()->json($admin);
}



public function destroy(string $id)
{
    $admin = User::find($id);
    if ($admin) {
        $admin->delete();
        return response()->json(['message' => 'Data deleted successfully']);
    } else {
        return response()->json(['error' => 'Data not found'], 404);
    }
}




}
