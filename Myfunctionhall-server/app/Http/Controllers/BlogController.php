<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\blog;
use DB;
use Illuminate\Support\Facades\Storage;

class BlogController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $blog = blog::get();
        return response()->json($blog);
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

    $imageFileNames = [];
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $imageFile) {
            $imageFileName = date('His') . $imageFile->getClientOriginalName();

            $imageFile->move(public_path('blog_upload'), $imageFileName);

            $imageFileNames[] = $imageFileName;
        }
    }

 
    $blog = new blog([
        'title' => $request->get('title'),
        'description' => $request->get('description'),
        'images' => json_encode($imageFileNames),
        'place' => $request->get('place'),
        'category' => json_encode($request->get('categories', [])), 
        'vendor' => $request->get('vendor'),
    ]);

    $blog->save();

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
        $blog = blog::where('id',$id)->first();
       return response()->json($blog);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $blog = blog::where('id',$id)->first();
       return response()->json($blog);
    }

    /**
     * Update the specified resource in storage.
     */


 public function update(Request $request, string $id)
{
    $blog = blog::find($id);

    if (!$blog) {
        return response()->json(['message' => 'blog not found'], 404);
    }

    $data = $request->all();
     $categories = $request->get('categories');
    $blog->category=$categories;
    $blog->title = $data['title'] ?? $blog->title;
    $blog->description = $data['description'] ?? $blog->description;
    $blog->place = $data['place'] ?? $blog->place;
    $blog->vendor = $data['vendor'] ?? $blog->vendor;
    
    if ($request->hasFile('images')) {
        $imageFileNames = [];

        foreach ($request->file('images') as $imageFile) {
            $imageFileName = date('His') . $imageFile->getClientOriginalName();

            $imageFile->move(public_path('blog_upload'), $imageFileName);

            $imageFileNames[] = $imageFileName;
        }

        $blog->images = $imageFileNames;
    }


    $blog->save();

    return response()->json(['message' => 'blog updated successfully'], 200);
}



       

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $blog = blog::find($id);
        $blog->delete();
        return response()->json($blog);
    }
}
