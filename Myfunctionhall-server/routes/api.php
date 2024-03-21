<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AddOnController;
use App\Http\Controllers\AdsliderController;
use App\Http\Controllers\AdvertiseController;
use App\Http\Controllers\BandController;
use App\Http\Controllers\CateringController;
use App\Http\Controllers\ChefController;
use App\Http\Controllers\CrackerController;
use App\Http\Controllers\DecorationController;
use App\Http\Controllers\RegisterController;

use App\Http\Controllers\EventmgmtController;
use App\Http\Controllers\HallController;
use App\Http\Controllers\LawnController;
use App\Http\Controllers\LightingController;
use App\Http\Controllers\MakeupController;
use App\Http\Controllers\MarketingController;
use App\Http\Controllers\PhotogController;
use App\Http\Controllers\TagController;
use App\Http\Controllers\TentController;
use App\Http\Controllers\VideogController;
use App\Http\Controllers\WaterController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\FrontEndController;
use App\Http\Controllers\EnquiryController;


use App\Http\Controllers\ServiceController;
use App\Http\Controllers\ServicevendorsController;


use App\Http\Controllers\BlogController;
use App\Http\Controllers\TestimonialController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routesfor your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::post('loginsanctum', [AuthController::class, 'login']);
Route::post('registration', [AuthController::class, 'register']);



Route::middleware('auth:sanctum')->group( function () {

    //Route::resource('blogs', BlogController::class);
    Route::get('getauthdata',[AuthController::class,'getauthdata']);
    Route::apiResource('Adslider',AdsliderController::class);
    Route::apiResource('Band',BandController::class);
    Route::apiResource('Cracker',CrackerController::class);

    Route::get('adminindex', [AuthController::class, 'adminindex']);
    Route::delete('adminindex/{id}', [AuthController::class, 'destroy']);
    Route::apiResource('register',RegisterController::class);

    Route::apiResource('Eventmgmt',EventmgmtController::class);


    // Route::apiResource('AddOn',AddOnController::class);
     // Route::get('Aupdate/{id}',AddOnController::class);


    //Route::apiResource('Advertise',AdvertiseController::class);
    //Route::patch('Advertise/{id}', [AdvertiseController::class, 'update']);

    //Route::put('Advertise/{id}', [AdvertiseController::class, 'update']);


    Route::apiResource('Lighting',LightingController::class);

    Route::put('/Marketing/{id}/update', [MarketingController::class,'update']);



    Route::apiResource('Photog',PhotogController::class);
    Route::apiResource('Tag',TagController::class);
    Route::apiResource('Tent',TentController::class);
    Route::apiResource('Videog',VideogController::class);
    Route::apiResource('Water',WaterController::class);

    Route::apiResource('Package',PackageController::class);

    Route::apiResource('Category',CategoryController::class);


Route::get('bandvendorfetch/{id}',[BandController::class,'bandvendorfetch']);
Route::get('crackervendorfetch/{id}',[CrackerController::class,'crackervendorfetch']);
Route::get('eventvendorfetch/{id}',[EventmgmtController::class,'eventvendorfetch']);

Route::get('photogvendorfetch/{id}',[PhotogController::class,'photogvendorfetch']);
Route::get('tentvendorfetch/{id}',[TentController::class,'tentvendorfetch']);
Route::get('videogvendorfetch/{id}',[VideogController::class,'videogvendorfetch']);
Route::get('watervendorfetch/{id}',[WaterController::class,'watervendorfetch']);

Route::get('enquiryvendorfetch/{id}',[EnquiryController::class,'enquiryvendorfetch']);

Route::get('lightvendorfetch/{id}',[LightingController::class,'lightvendorfetch']);







Route::get('addonvendorfetch/{id}',[AddOnController::class,'addonvendorfetch']);

Route::apiResource('AddOn',AddOnController::class);
Route::get('advertisevendorfetch/{id}',[AdvertiseController::class,'advertisevendorfetch']);
Route::apiResource('Advertise', AdvertiseController::class);
Route::apiResource('Chef',ChefController::class);
Route::get('chefvendorfetch/{id}',[ChefController::class,'chefvendorfetch']);



Route::apiResource('Decoration',DecorationController::class);
Route::get('decorationvendorfetch/{id}',[DecorationController::class,'decorationvendorfetch']);
Route::apiResource('Catering',CateringController::class);


Route::apiResource('Hall',HallController::class);
Route::get('hallvendorfetch/{id}',[HallController::class,'hallvendorfetch']);
Route::apiResource('Lawn',LawnController::class);
Route::get('lawnvendorfetch/{id}',[LawnController::class,'lawnvendorfetch']);
Route::apiResource('Makeup',MakeupController::class);
Route::get('makeupvendorfetch/{id}',[MakeupController::class,'makeupvendorfetch']);

Route::apiResource('Marketing',MarketingController::class);
Route::get('marketingvendorfetch/{id}',[MarketingController::class,'marketingvendorfetch']);

Route::get('fetchuser/{id}',[ProfileController::class,'fetchuser']);
Route::apiResource('Profile',ProfileController::class);
Route::get('perticularuser/{id}',[ProfileController::class,'perticularuser']);



});


Route::get('decorationvendorfetchfrontend/{id}',[DecorationController::class,'decorationvendorfetchfrontend']);
Route::apiResource('Contact',ContactController::class);


 // Route::apiResource('Hall',HallController::class);


 Route::get('cateringvendorfetch/{id}',[CateringController::class,'cateringvendorfetch']);





Route::apiResource('Product',ProductController::class);
Route::get('categoryfrontend',[FrontEndController::class,'categoryfetch']);
Route::get('blogfrontend',[FrontEndController::class,'blogfetch']);
Route::get('hallfrontend',[FrontEndController::class,'hallfetch']);
Route::get('hallfrontendcity',[FrontEndController::class,'hallfetchcity']);
Route::get('halldesc/{id}',[FrontEndController::class,'Halldesc']);
Route::get('Categoryshow/{id}',[FrontEndController::class,'Categoryshow']);

Route::get('hallidshow/{id}',[EnquiryController::class,'hallidshow']);


// Route::get('hallfrontend',[FrontEndController::class,'hallfetch']);

Route::get('getHallsByAddress/{address}',[FrontEndController::class,'getHallsByAddress']);
Route::get('getBlogById/{id}',[FrontEndController::class,'getBlogById']);


Route::apiResource('enquiry',EnquiryController::class);

Route::get('/filter-halls',[FrontEndController::class,'filterByCategories']);
Route::get('hallshow/{id}',[FrontEndController::class,'hallshow']);

// Route::get('send/email',[FrontEndController::class,'mail'])->name('email');

Route::get('send-enquiry-email',[FrontEndController::class,'sendEnquiryEmail']);
Route::get('filteredhalls', [FrontEndController::class, 'filteredHalls']);




Route::apiResource('Service',ServiceController::class);
Route::apiResource('Servicevendors',ServicevendorsController::class);
Route::get('Serviceget',[ServicevendorsController::class,'Serviceget']);




Route::apiResource('blog',BlogController::class);
Route::apiResource('testimonial',TestimonialController::class);

Route::get('gettestimonialId/{id}',[FrontEndController::class,'getBlogById']);

Route::get('bandvendorfetchfrontend/{id}',[BandController::class,'bandvendorfetchfrontend']);
Route::get('cateringvendorfetchfrontend/{id}',[CateringController::class,'cateringvendorfetchfrontend']);
Route::get('chefvendorfetchfrontend/{id}',[ChefController::class,'chefvendorfetchfrontend']);
Route::get('makeupvendorfetchfrontend/{id}',[MakeupController::class,'makeupvendorfetchfrontend']);
Route::get('photogvendorfetchfrontend/{id}',[PhotogController::class,'photogvendorfetchfrontend']);
Route::get('eventmngvendorfetchfrontend/{id}',[EventmgmtController::class,'eventmngvendorfetchfrontend']);


Route::get('loadChartData/{id}',[EnquiryController::class,'loadChartData']);
