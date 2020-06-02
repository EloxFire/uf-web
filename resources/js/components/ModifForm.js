import React, { Component } from 'react';

export default class ModifForm extends Component{

  constructor(props){
    super(props);

    this.state = {
      propertyName: '',
      propertyNewName: '',
      propertyType: '',
      propertyAera: '',
      roomNumber: '',
      bedroomNumber: '',
      propertyAdress: '',
      propertyAdressComp: '',
      propertyCity: '',
      propertyZip: '',
      propertyPrice: ''
    }

    this.handleChangePropertyName = this.handleChangePropertyName.bind(this);
    this.handleChangePropertyNewName = this.handleChangePropertyNewName.bind(this);
    this.handleChangePropertyType = this.handleChangePropertyType.bind(this);
    this.handleChangePropertyAera = this.handleChangePropertyAera.bind(this);
    this.handleChangeRoomNumber = this.handleChangeRoomNumber.bind(this);
    this.handleChangeBedroomNumber = this.handleChangeBedroomNumber.bind(this);
    this.handleChangePropertyAdress = this.handleChangePropertyAdress.bind(this);
    this.handleChangePropertyAdressComp = this.handleChangePropertyAdressComp.bind(this);
    this.handleChangePropertyCity = this.handleChangePropertyCity.bind(this);
    this.handleChangePropertyZip = this.handleChangePropertyZip.bind(this);
    this.handleChangePropertyPrice = this.handleChangePropertyPrice.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangePropertyName(e) {
    this.setState({
        propertyName: e.target.value
    });
    console.log('onChange propertyName', this.state.propertyName);
  }
  handleChangePropertyNewName(e) {
    this.setState({
        propertyNewName: e.target.value
    });
    console.log('onChange propertyNewName', this.state.propertyNewName);
  }
  handleChangePropertyType(e) {
    this.setState({
        propertyType: e.target.value
    });
    console.log('onChange propertyType :', this.state.propertyType);
  }
  handleChangePropertyAera(e) {
    this.setState({
        propertyArea: e.target.value
    });
    console.log('onChange propertyAera : ', this.state.propertyArea);
  }
  handleChangeRoomNumber(e) {
    this.setState({
        roomNumber: e.target.value
    });
    console.log('onChange roomNumber :', this.state.roomNumber);
  }
  handleChangeBedroomNumber(e) {
    this.setState({
        bedroomNumber: e.target.value
    });
    console.log('onChange bedroomNumber :', this.state.bedroomNumber);
  }
  handleChangePropertyAdress(e) {
    this.setState({
        propertyAdress: e.target.value
    });
    console.log('onChange propertyAdress :', this.state.propertyAdress);
  }
  handleChangePropertyAdressComp(e) {
    this.setState({
        propertyAdressComp: e.target.value
    });
    console.log('onChange propertyAdressComp : ', this.state.propertyAdressComp);
  }
  handleChangePropertyCity(e) {
    this.setState({
        propertyCity: e.target.value
    });
    console.log('onChange propertyCity :', this.state.propertyCity);
  }
  handleChangePropertyZip(e) {
    this.setState({
        propertyZip: e.target.value
    });
    console.log('onChange propertyZip :', this.state.propertyZip);
  }
  handleChangePropertyPrice(e) {
    this.setState({
        propertyPrice: e.target.value
    });
    console.log('onChange propertyPrice :', this.state.propertyPrice);
  }

  handleSubmit(e){
    e.preventDefault();
    axios.post('/modif', {
      headers: {
        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
      },
      property_name: this.state.propertyName,
      property_new_name: this.state.propertyNewName,
      property_type: this.state.propertyType,
      property_area: this.state.propertyArea,
      property_room_nb: this.state.roomNumber,
      property_bedroom_nb: this.state.bedroomNumber,
      property_adress: this.state.propertyAdress,
      property_adress_comp: this.state.propertyAdressComp,
      property_city: this.state.propertyCity,
      property_zip: this.state.propertyZip,
      property_price: this.state.property_price
    }).then(response => {
      console.log('from Submit', response);
    });
  }

  render(){
    return(
      <div className="container">
        <form className="mt-5" onSubmit={this.handleSubmit}>
          <h2 className="mt-2"><span>M</span>odifier un bien mis en vente</h2>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputNameBien">Bien à modifier</label>
              <input onChange={this.handleChangePropertyName} type="text" className="form-control" id="inputNameBien" placeholder="Appartement, maison, villa..."/>
            </div>
          </div>

          <h2 className="mt-5"><span>N</span>ouvelles informations</h2>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputNameBien">Nouveau nom commun du bien (apparait comme titre su r les pages)</label>
              <input onChange={this.handleChangePropertyNewName} type="text" className="form-control" id="inputNameBien" placeholder="Appartement, maison, villa..."/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-3">
              <label htmlFor="inputTypeBien">Nouveau nype de bien</label>
              <input onChange={this.handleChangePropertyType} type="text" className="form-control" id="inputTypeBien" placeholder="Appartement, maison, villa..."/>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputSuperficieBien">Nouvelle superficie (m²)</label>
              <input onChange={this.handleChangePropertyArea} type="number" className="form-control" id="inputSuperficieBien" placeholder="100"/>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputNbPiecesBien">Nouveau nombre de pièces</label>
              <input onChange={this.handleChangeRoomNumber} type="number" className="form-control" id="inputNbPiecesBien" placeholder="6"/>
            </div>
            <div className="form-group col-md-3">
              <label htmlFor="inputNbChambresBien">Nouveau nombre de chambres</label>
              <input onChange={this.handleChangeBedroomNumber} type="number" className="form-control" id="inputNbChambresBien" placeholder="2"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <label htmlFor="inputAdresseBien">Nouvelle adresse</label>
              <input onChange={this.handleChangePropertyAdress} type="text" className="form-control" id="inputAdresseBien" placeholder="2 Rue le Corbusier"/>
            </div>
            <div className="form-group col-md-12">
              <label htmlFor="inputCompAdresseBien">Nouveau complément d'adresse</label>
              <input onChange={this.handleChangePropertyAdressComp} type="text" className="form-control" id="inputCompAdresseBien" placeholder="Appartement numéro, étage, batiment"/>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="inputVilleBien">Nouvelle ville</label>
              <input onChange={this.handleChangePropertyCity} type="text" className="form-control" id="inputVilleBien" placeholder="Aix-en-Provence"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputZipBien">Nouveau code postal</label>
              <input onChange={this.handleChangePropertyZip} type="text" className="form-control" id="inputZipBien" placeholder="13090"/>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputPriceBien">Nouveau prix</label>
              <input onChange={this.handleChangePropertyPrice} type="number" className="form-control" id="inputPriceBien" placeholder="100000"/>
            </div>
          </div>

          <button type="submit" className="mt-3 btn btn-warning">Modifier le bien</button>
        </form>
      </div>
    )
  }
}
