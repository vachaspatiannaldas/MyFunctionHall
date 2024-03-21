<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\category;
use App\Models\blog;
use App\Models\hall;

use DB;
use Illuminate\Support\Facades\Storage;

class FrontEndController extends Controller
{
     public function categoryfetch()
    {
        $categories = Category::all();
    return response()->json($categories);
    }

     public function blogfetch()
    {
        $category = blog::get();
        return response()->json($category);
    }

         public function hallfetch()
        {
            $category = hall::get();
            return response()->json($category);
        }

        public function hallfetchcity()
  {
      $uniqueAddresses = hall::select('address')->distinct()->get();

      $addarray = array();

      foreach ($uniqueAddresses as $u) {
        // code...
        $hall = hall::where('address','=',$u->address)->first();
        array_push($addarray, $hall);
      }

      return response()->json($addarray);
  }


      public function Halldesc($id)
    {
      //return response()->json($id);
      $pro=DB::table('halls')
          ->where('id','=',$id)
          ->get();
      return response()->json($pro);

    }
public function filterByCategories(Request $request)
{
    $selectedCategories = $request->input('selectedCategories');
    $filteredHalls = Hall::whereIn('category', $selectedCategories)->get();
    return response()->json(['halls' => $filteredHalls]);
}


public function Categoryshow($id)
{
    $category = DB::table('categories')
        ->where('id', $id)
        ->first();

    if (!$category) {
        return response()->json(['message' => 'Category not found'], 404);
    }

    return response()->json($category);
}


public function hallshow($id)
    {
      //return response()->json($id);
      $pro=DB::table('halls')
          ->join('categories','halls.category','=','categories.id')
          ->where('halls.category','=',$id)
          ->select('*', 'halls.id as pid')
          ->get();
        return $pro;
    }


        // public function filteredHalls(Request $request)
        // {
        //         $selectedCategories = explode(',', $request->input('selectedCategories')); // Convert the string to an array

        //     $query = Hall::query();

        //     if (!empty($selectedCategories)) {
        //         $query->whereIn('category', $selectedCategories);
        //     }

        //     $filteredHalls = $query->get();

        //     return response()->json($filteredHalls);
        // }




//2222222



// public function filteredHalls(Request $request)
// {
//     $selectedCategories = explode(',', $request->input('selectedCategories'));

//     $includeAllFunctionHall = in_array('all', $selectedCategories);

//     $query = Hall::query();

//     if (!empty($selectedCategories) && !$includeAllFunctionHall) {
//         $query->whereIn('category', $selectedCategories);
//     }

//     if (!$includeAllFunctionHall) {
//         $query->where('category', '!=', 'All Function Hall');
//     }

//     $filteredHalls = $query->get();

//     return response()->json($filteredHalls);
// }










public function filteredHalls(Request $request)
{
  $selectedCategories = explode(',', $request->input('selectedCategories'));

  // $demo_data = $request->get('selectedCategories');
  $selectedCategoryNames = [];

  foreach($selectedCategories as $s){
    $name = category::where('id','=',$s)
      ->select('name')
      ->first();

    array_push($selectedCategoryNames, $name['name']);
  }

  // return response()->json($selectedCategoryNames);

  $filteredHalls = [];

  if (!empty($selectedCategories))
  {
    $hall = hall::get();

    foreach($hall as $h){
      $hall_category = json_decode($h->category);

      $intersectvalue = array_intersect((array)$hall_category,(array)$selectedCategoryNames);

      // $data['intersectvalue'] = $intersectvalue;
      // $data['selectedCategoryNames'] = $selectedCategoryNames;

      // return response()->json($data);

      sort($intersectvalue);
      sort($selectedCategoryNames);


      //$diff_value = array_diff($selectedCategoryNames, $hall_category);

      // return response($diff_value);

      // return response($intersectvalue);
      // if(!$diff_value){
      //   array_push($filteredHalls, $h);
      // }

      if($intersectvalue == $selectedCategoryNames){
        array_push($filteredHalls, $h);
      }
    }
  }
  return response()->json($filteredHalls);
}








































// public function filteredHalls(Request $request)
// {
//     $selectedCategories = explode(',', $request->input('selectedCategories')); // Convert the string to an array
//     $selectedHalls = explode(',', $request->input('selectedHalls')); // Convert the string to an array

//     $query = Hall::query();

//     if (!empty($selectedCategories)) {
//         $query->whereIn('category', $selectedCategories);
//     }

//     if (!empty($selectedHalls)) {
//         $query->whereIn('id', $selectedHalls);
//     }

//     $filteredHalls = $query->get();

//     return response()->json($filteredHalls);
// }








public function getHallsByAddress($address)
{
    $halls = Hall::where('address', $address)->get();

    return response()->json($halls);
}


public function getBlogById($id)
{
    $blog = Blog::where('id',$id)->get();
    return response()->json($blog);
}

public function gettestimonialId($id)
{
    $test = testimonial::where('id',$id)->get();
    return response()->json($test);
}







 }
