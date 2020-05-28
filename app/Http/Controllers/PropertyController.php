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
      'user_name' => $request->userName,
      'user_lastname' => $request->inputLastName,
      'user_mail' => $request->inputMail,
      'property_type' => $request->inputTypeBien,
      'property_area' => $request->inputSuperficieBien,
      'property_city' => $request->inputVilleBien,
      'property_adress' => $request->inputAdresseBien,
      'property_adress_comp' => $request->inputCompAdresseBien,
      'property_room_nb' => $request->inputNbPiecesBien,
      'property_bedroom_nb' => $request->inputNbChambresBien,
      'property_zip' => $request->inputZipBien
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
    //
  }

  public function destroy($id){
    //
  }
}
