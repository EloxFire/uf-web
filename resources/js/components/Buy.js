import React, { Component } from 'react';
import CardProperty from './subComponents/CardProperty';
import Menu from './subComponents/Menu';
import ReactDOM from 'react-dom';
import '../../sass/forms.scss';

export default class Buy extends Component {
  render() {
    return (
      <div className="container d-flex flex-wrap">
        <Menu/>
        <div className="col-12 mb-3">
          <h1><span>L</span>iste des propriété en vente :</h1>
        </div>
        <div className="adContainer col-12 d-flex flex-wrap justify-content-center">
          <CardProperty name="Villa Luxueuse"
          desc="Copyright (c) 2018 Copyright Holder All Rights Reserved."
          price="945 500 €" area="190m²" room="5" bedroom="2"/>

          <CardProperty name="Villa Luxueuse"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          price="1 245 000 €" area="220m²" room="8" bedroom="3"/>

          <CardProperty name="Villa Luxueuse"
          desc="Villa magnifique sur les bords de la Torse"
          price="945 500 €" area="137m²" room="5" bedroom="1"/>

          <CardProperty name="Villa Luxueuse"
          desc="Copyright (c) 2018 Copyright Holder All Rights Reserved."
          price="945 500 €" area="140m²" room="6" bedroom="2"/>
        </div>
      </div>
    );
  }
}
