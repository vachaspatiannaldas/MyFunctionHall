<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\catering;
use App\Models\hall;
use DB;
use Illuminate\Support\Facades\Storage;

class CateringController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $catering = catering::get();
        return response()->json($catering);
    }


    public function cateringvendorfetch($id)
    {
      $catering = catering::where('userid',$id)->get();
      return response()->json($catering);
    }


    public function cateringvendorfetchfrontend($id)
    {
        $user = hall::find($id);

        $user_id = $user->userid;

        // return $user_id;
        $bands = DB::table('caterings')
            ->select('*')
            ->where('userid', $user_id)
            ->get();

        return response()->json($bands);

      //  return response()->json($result);
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

        $catering = new catering([
            'caterer' => $request->get('caterer'),
            'type' => $request->get('type'),
            'contact' => $request->get('contact'),
            'email' => $request->get('email'),
            'address' => $request->get('address'),
            'speciality' => $request->get('speciality'),
            'details' => $request->get('details'),
            'userid'=>$request->get('userid')
        ]);

        $catering->save();

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
        $catering = catering::where('id',$id)->first();
        return response()->json($catering);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $catering = catering::where('id',$id)->first();
        return response()->json($catering);
    }

    /**
     * Update the specified resource in storage.
     */
     public function update(Request $request, string $id)
     {
         $caterer = $request->get('caterer');
         $type = $request->get('type');
         $contact = $request->get('contact');
         $email = $request->get('email');
         $address = $request->get('address');
         $speciality = $request->get('speciality');
         $details = $request->get('details');
          $userid = $request->get('userid');

         $cateringup = Catering::find($id);

         $cateringup->caterer = $caterer;
         $cateringup->type = $type;
         $cateringup->contact = $contact;
         $cateringup->email = $email;
         $cateringup->address = $address;
         $cateringup->speciality = $speciality;
         $cateringup->details = $details;
          $cateringup->userid = $userid;

         $cateringup->save();

         return response()->json([
             'status' => 'success',
             'msg' => 'Data Updated',
         ]);
     }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $catering = catering::find($id);
        $catering->delete();
        return response()->json($catering);
    }
}
