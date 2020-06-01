<link rel="stylesheet" type="text/css" href="{{ asset('css/css.css') }}" >
@extends('layouts.app')
@section('content')
<div class="container">

    <?php
      use App\Property;
      $p = Property::get();
    ?>
    <div class="col-12 d-flex flex-wrap justify-content-center">
      @foreach($p as $property)
      <div class="buyPage col-4">
        <div class="card col-12 m-2">
          <img class="card-img-top" src={{asset('/images/villa.jpg')}} alt="Card Image"/>
          <div class="card-body">
            <h5 class="card-title">{{$property->property_name}}</h5>
            <p class="card-text desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Prix : {{$property->property_price}} €</li>
            <li class="list-group-item">Surface : {{$property->property_area}} m²</li>
            <li class="list-group-item">Pièces : {{$property->property_room_nb}}</li>
            <li class="list-group-item">Chambres : {{$property->property_bedroom_nb}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Voir l'anonce</a>
            <a href="#" class="card-link">Faire un offre</a>
          </div>
        </div>
      </div>
      @endforeach
    </div>


</div>
@endsection
