<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\eventmg;
use DB;
use App\Models\hall;

use Illuminate\Support\Facades\Storage;
class EventmgmtController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $eventmgmt = eventmg::get();
        return response()->json($eventmgmt);
    }


public function eventvendorfetch($id)
{
  $event = eventmg::where('userid',$id)->get();
  return response()->json($event);

}

public function eventmngvendorfetchfrontend($id)
{
    $user = hall::find($id);
    $user_id = $user->userid;

    $bands = DB::table('eventmgs')
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
    public function store(Request $request)
    {
        $arr = [];

            $eventmgmt = new eventmg([
                'name' => $request->get('name'),
                'type' => $request->get('type'),
                'contact' => $request->get('contact'),
                'email' => $request->get('email'),
                'address' => $request->get('address'),
                'packages' => $request->get('packages'),
                  'details' => $request->get('details'),
                  'userid' => $request->get('userid'),
            ]);

            $eventmgmt->save();

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
        $eventmgmt = eventmg::where('id',$id)->first();
        return response()->json($eventmgmt);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $eventmgmt = eventmg::where('id',$id)->first();
        return response()->json($eventmgmt);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $arr = [];

        $name = $request->get('name');
        $type = $request->get('type');
        $contact = $request->get('contact');
        $email = $request->get('email');
        $address = $request->get('address');
        $packages = $request->get('packages');
        $details = $request->get('details');
          $userid = $request->get('userid');

        $eventmgmtup = eventmg::find($id);

        $eventmgmtup->name = $name;
        $eventmgmtup->type = $type;
        $eventmgmtup->contact = $contact;
        $eventmgmtup->email = $email;
        $eventmgmtup->address = $address;
        $eventmgmtup->packages = $packages;
        $eventmgmtup->details = $details;
          $eventmgmtup->userid = $userid;
        $eventmgmtup->save();

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
        $eventmgmt = eventmg::find($id);
        $eventmgmt->delete();
        return response()->json($eventmgmt);
    }
}
