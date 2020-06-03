@extends('layouts.app')

@section('content')
<div class="container">
  <form class="mt-5" method="post" action="{{route('bien.remove')}}">
    @method('DELETE')
    <h2 class="mt-2"><span>R</span>etirer un bien mis en vente</h2>
      <div class="form-group col-md-12">
        <label for="selectBienDel">Nom du bien à retirer de la vente</label>
        <select class="custom-select mr-sm-2" id="selectBienDel">
          <?php
            use App\Property;
            $p = Property::get();
          ?>

          <option value="Villa 1">Villa 1</option>
        </select>
      </div>

      <div class="form-group col-md-12">
        <label for="selectedAdress">Adresse du bien à retirer de la vente</label>
        <select class="custom-select mr-sm-2" id="selectedAdress">

        </select>

        <button type="submit" class="mt-3 btn btn-danger">Retirer le bien</button>
      </div>
  </form>
</div>
@endsection
