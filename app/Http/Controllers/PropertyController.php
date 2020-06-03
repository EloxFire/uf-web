<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// FOR USE OFF Auth::user()
use Illuminate\Support\Facades\Auth;

class PropertyController extends Controller {

  public function index(){
    $property = \App\Property::latest();
  }

  public function create(){
    return view('forms.addForm');
  }

  public function store(Request $request){

    \App\Property::create([
      'user_name' => Auth::user()->lastname,
      'user_lastname' => Auth::user()->firstname,
      'user_mail' => Auth::user()->email,
      'property_name' => $request->property_name,
      'property_type' => $request->property_type,
      'property_area' => $request->property_area,
      'property_city' => $request->property_city,
      'property_adress' => $request->property_adress,
      'property_adress_comp' => $request->property_adress_comp,
      'property_room_nb' => $request->property_room_nb,
      'property_bedroom_nb' => $request->property_bedroom_nb,
      'property_zip' => $request->property_zip,
      'property_price' => $request->property_price
    ]);

    return redirect()->route('home')->with('success', 'Propriété ajoutée !');
  }

  public function show($id){
    //
  }

  public function edit($id){
    //
  }

  public function update(Request $request){

    $lastname = Auth::user()->lastname;
    $name = Auth::user()->firstname;
    $mail = Auth::user()->email;
    $property_name = $request->property_name;

    \App\Property::where('property_name', $property_name)->update([
      'property_name' => $request->property_new_name,
      'property_type' => $request->property_type,
      'property_area' => $request->property_area,
      'property_city' => $request->property_city,
      'property_adress' => $request->property_adress,
      'property_adress_comp' => $request->property_adress_comp,
      'property_room_nb' => $request->property_room_nb,
      'property_bedroom_nb' => $request->property_bedroom_nb,
      'property_zip' => $request->property_zip,
      'property_price' => $request->property_price
    ]);
  }

  public function destroy(Request $request){
    $name = $request->selectBienDel;
    $adress = $request->selectedAdress;

    \App\Property::where('property_name', $name)->delete();

    // return redirect()->route('home')->with('success', 'Propriété suprimée !');
  }
}
