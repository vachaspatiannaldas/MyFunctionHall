<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\enquiry;
use App\Models\hall;


use Illuminate\Support\Facades\Mail;
use DB;

use App\Notifications\EnquiryNotification;


class EnquiryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
         $contact = enquiry::get();
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
    // public function store(Request $request)
    // {
    //     $arr = [];

    //         $contact = new enquiry([
    //             'name' => $request->get('name'),
    //             'event_date' => $request->get('event_date'),
    //             'mobile' => $request->get('mobile'),
    //             'guest_count' => $request->get('guest_count'),
    //             'plate_cost' => $request->get('plate_cost'),
    //              'address' => $request->get('address'),
    //              'food' => $request->get('food'),
    //             'msg' => $request->get('msg'),
    //             'event_time' => $request->get('event_time'),
    //         ]);

    //         $contact->save();

    //         $data['status'] = "success";
    //         $data['msg'] = "Data Insert";
    //         array_push($arr, $data);

    //         return response()->json($arr);
    // }

























//     public function store(Request $request)
//     {
//         // Validate the request data if needed
//         $request->validate([
//             'name' => 'required|string',
//             'event_date' => 'required|date',
//             'mobile' => 'required|string',
//             'guest_count' => 'required|string',
//             'plate_cost' => 'required|string',
//             'address' => 'required|string',
//             'food' => 'required|string',
//             'msg' => 'required|string',
//             'event_time' => 'required|string',
//             'email' => 'required|string',
//             'hall_id' => 'required|string',
//         ]);

//         // Create a new Enquiry model instance and populate it with data
//         $enquiry = new Enquiry([
//             'name' => $request->input('name'),
//             'event_date' => $request->input('event_date'),
//             'mobile' => $request->input('mobile'),
//             'guest_count' => $request->input('guest_count'),
//             'plate_cost' => $request->input('plate_cost'),
//             'address' => $request->input('address'),
//             'food' => $request->input('food'),
//             'msg' => $request->input('msg'),
//             'event_time' => $request->input('event_time'),
//             'email' => $request->input('email'),
//             'hall_id' => $request->input('hall_id'),
//         ]);

//         // Save the enquiry data to the database
//         $enquiry->save();

//         // Send an email notification
//         //$enquiry->notify(new EnquiryNotification($enquiry));

//         // Return a JSON response indicating success

//         $datas = ['name' => $name, 'email' => $email, 'mobile' => $mobile, 'guest_count' => $guest_count, 'address' => $address, 'event_time' => $event_time];
//         $user['to'] = $email;



//         Mail::send('register_email', $datas, function ($message) use ($user) {
//             $message->to($user['to']);
//             $message->subject("congratulations🎉 Your Registration is Successfully Completed");
// });



//         return response()->json(['status' => 'success', 'msg' => 'Enquiry submitted successfully']);
//     }



































// EnquiryController.php
public function store(Request $request)
{



      // Check for existing bookings on the same date and time
        // $existingBooking = Enquiry::where('event_date', $request->input('event_date'))
        //     ->where('event_time', $request->input('event_time'))
        //     ->where('hall_id', $request->input('hall_id'))
        //     ->first();
        //
        // if ($existingBooking) {
        //     // Check if the date and time are the same
        //     if ($existingBooking->event_date == $request->input('event_date') &&
        //         $existingBooking->event_time == $request->input('event_time')) {
        //         return response()->json(['message' => 'Hall is already booked for the selected date and time. Please choose another date and time.'], 400);
        //     }
        // }
        //



      $enquiry = new Enquiry([
            'name' => $request->input('name'),
            'event_date' => $request->input('event_date'),
            'mobile' => $request->input('mobile'),
            'guest_count' => $request->input('guest_count'),
            'plate_cost' => $request->input('plate_cost'),
            'address' => $request->input('address'),
            'food' => $request->input('food'),
            'msg' => $request->input('msg'),
            'event_time' => $request->input('event_time'),
            'email' => $request->input('email'),
            'hall_id' => $request->input('hall_id'),
            'hall_name' => $request->input('hall_name'),
        ]);
    $enquiry->save();

    $datas = [
        'name' => $enquiry->name,
        'email' => $enquiry->email,
        'guest_count' => $enquiry->guest_count,
        'address' => $enquiry->address,
        'event_time' => $enquiry->event_time,
        'event_date'=>$enquiry->event_date,
        'hall_id'=>$enquiry->hall_id,
        'plate_cost'=>$enquiry->plate_cost,
        'food'=>$enquiry->food,
        'created_at'=>$enquiry->created_at,
        'mobile'=>$enquiry->mobile,
        'hall_name'=>$enquiry->hall_name,


    ];

    $user = ['to' => $enquiry->email];

    Mail::send('emails/register_email', $datas, function ($message) use ($user) {
        $message->to($user['to']);
        $message->subject("Congratulations! 🎉🎊 Your Enquiry is Send Successfully ");
    });

    return response()->json(['message' => 'Enquiry saved and email sent successfully']);
}


























public function hallidshow($id)
{
    $data = DB::table('halls')
        ->join('enquiries', 'halls.id', '=', 'enquiries.hall_id')
        ->where('enquiries.hall_id', $id)
        // ->select('halls.hname')
        ->select('*', 'halls.id as pidd')
        ->get();

    return response()->json($data);
}
//
// public function enquiryvendorfetch($id)
// {
//   $enquiry = DB::table('halls')
//   ->join('enquiries','halls.id','=','enquiries.hall_id')
//   ->where('enquiries.hall_id', $id)
//   ->select('*,''halls.id as pidd')
//   ->get();
// }


public function enquiryvendorfetch($id)
{
  // $enq = enquiry::where('hall_id', $id)->get();

  $halls = hall::where('userid','=',$id)->select('*')->get();

  $enq = array();

  // return $halls;

  foreach ($halls as $h) {
    $henq = enquiry::where('hall_id','=',$h->id)->select('*')->get();
    // return response()->json($henq);

    foreach ($henq as $he) {
      array_push($enq,$he);
    }
  }

 return response()->json($enq);
}


public function sendEnquiryEmail(Request $request)
    {
        // Extract the data you want to pass to the email notification
        $name = $request->input('name'); // Replace with the actual field name
        $email = $request->input('email'); // Replace with the actual field name

        try {
            // Send an email using Laravel's built-in Mail facade
            Mail::to('abhishekgouda882@gmail.com') // Replace with the recipient's email address
                ->send(new EnquiryNotification($name, $email)); // Pass the data to your email notification class

            // Return a JSON response indicating success
            return response()->json(['status' => 'success', 'msg' => 'Email sent']);
        } catch (\Exception $e) {
            // Handle email sending errors, log them, or return an error response
            return response()->json(['status' => 'error', 'msg' => 'Email sending failed']);
        }
    }







    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $contact = enquiry::where('id',$id)->first();
        return response()->json($contact);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

// public function ()
// {
//   $enquirydata = enquiry::select('event_date')->get();
//   return response()->json($enquirydata);
// }




// public function loadChartData($id)
// {
//     $enq = enquiry::where('hall_id', $id)->pluck('event_date')->toArray();

//     return response()->json($enq);
// }


// public function loadChartData($id)
// {
//     $enquiries = Enquiry::where('hall_id', $id)
//         ->select(DB::raw('MONTH(STR_TO_DATE(event_date, "%m/%d/%Y")) as month'), DB::raw('COUNT(*) as count'))
//         ->groupBy(DB::raw('MONTH(STR_TO_DATE(event_date, "%m/%d/%Y"))'))
//         ->get();

//     $data = [];

//     foreach ($enquiries as $enquiry) {
//         $month = $enquiry->month;
//         $count = $enquiry->count;
//         $data[$month] = $count;
//     }

//     // Fill in missing months with a count of 0
//     for ($i = 1; $i <= 12; $i++) {
//         if (!isset($data[$i])) {
//             $data[$i] = 0;
//         }
//     }

//     ksort($data); // Sort the array by keys

//     return response()->json($data);
// }



public function loadChartData($id)
{
    $enquiries = Enquiry::where('hall_id', $id)
        ->select(DB::raw('MONTH(STR_TO_DATE(event_date, "%m/%d/%Y")) as month'), DB::raw('COUNT(*) as count'))
        ->groupBy(DB::raw('MONTH(STR_TO_DATE(event_date, "%m/%d/%Y"))'))
        ->get();

    $data = [];

    foreach ($enquiries as $enquiry) {
        $month = $enquiry->month;
        $count = $enquiry->count;
        $data[$month] = $count;
    }

    // Fill in missing months with a count of 0
    for ($i = 1; $i <= 12; $i++) {
        if (!isset($data[$i])) {
            $data[$i] = 0;
        }
    }

    ksort($data); // Sort the array by keys

    $dataArray = array_values($data); // Convert to array format

    return response()->json($dataArray);
}

}
