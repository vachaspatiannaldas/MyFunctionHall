<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\contact;
use DB;
use Illuminate\Support\Facades\Storage;
class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $contact = contact::get();
        return response()->json($contact);
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

            $contact = new contact([ 
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'phone' => $request->get('phone'),
                'message' => $request->get('message'),
            ]);

            $contact->save();

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
        $contact = contact::where('id',$id)->first();
        return response()->json($contact);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $contact = contact::where('id',$id)->first();
        return response()->json($contact);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $arr = [];
    
        $name = $request->get('name');
        $email = $request->get('email');
        $phone = $request->get('phone');
        $message = $request->get('message');
    
        $contactup = contact::find($id);
    
        $contactup->name = $name;
        $contactup->email = $email;
        $contactup->phone = $phone;
        $contactup->message = $message;
    
        $contactup->save();
    
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
        $contact = contact::find($id);
        $contact->delete();
        return response()->json($contact);
    }
}
