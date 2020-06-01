<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
// use App\User;

class Property extends Model {

  protected $table = 'property';

  protected $fillable = [
    'user_name', 'user_lastname', 'user_mail', 'property_type', 'property_name', 'property_area', 'property_room_nb', 'property_bedroom_nb',
    'property_adress', 'property_adress_comp', 'property_city', 'property_zip', 'property_price'
  ];
  
}
