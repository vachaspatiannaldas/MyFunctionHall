<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return response()->json($products);
    }

    public function store(Request $request)
    {
        $product = Product::create($request->all());
        return response()->json($product, 201);
    }

    public function show($id)
    {
        $product = Product::find($id);
        return response()->json($product);
    }


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

      if ($request->hasFile('images')) {
          $imageFileNames = [];

          foreach ($request->file('images') as $imageFile) {
              $imageFileName = date('His') . $imageFile->getClientOriginalName();

              $imageFile->move(public_path('hall_upload'), $imageFileName);

              $imageFileNames[] = $imageFileName;
          }

          $hall->images = $imageFileNames;
      }

      if ($request->hasFile('video')) {
          $videoFileName = date('His') . $request->file('video')->getClientOriginalName();

          $request->file('video')->move(public_path('hall_upload'), $videoFileName);

          $hall->video = $videoFileName;
      }

      $hall->save();

      return response()->json(['message' => 'Hall updated successfully'], 200);
  }
















    public function destroy(string $id)
   {
       $hall = hall::find($id);
       $hall->delete();
       return response()->json($hall);
   }
}
