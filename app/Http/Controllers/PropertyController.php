<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use App\Property;

class PropertyController extends Controller {

  public function index(){
    $property = \App\Property::latest();
  }

  public function create(){
    return view('forms.addForm');
  }

  public function store(Request $request){

    $request->validate([
      'user_name' => 'required|max:255',
      'user_lastname' => 'required|max:255',
      'user_mail' => 'required|max:255',
    ]);
    \App\Property::create([
      'user_name' => $request->user_name,
      'user_lastname' => $request->user_lastname,
      'user_mail' => $request->user_mail,
      'property_name' => $request->property_name,
      'property_type' => $request->property_type,
      'property_area' => $request->property_area,
      'property_city' => $request->property_city,
      'property_adress' => $request->property_adress,
      'property_adress_comp' => $request->property_adress_comp,
      'property_room_nb' => $request->property_room_nb,
      'property_bedroom_nb' => $request->property_bedroom_nb,
      'property_zip' => $request->property_zip
    ]);

    // return redirect()->route('addForm')->with('success', 'Bien ajoutée !');
  }

  public function show($id){
    //
  }

  public function edit($id){
    //
  }

  public function update(Request $request, $id){

    $mail = Auth::user()->mail;
    App\Property::where('user_name', $name, 'user_mail', $mail)->update(['description' => $request->description, 'logo' => $request->logo]);
  }

  public function destroy($id){
    //
  }
}
