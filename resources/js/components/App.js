import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OfferCard from './subComponents/offerCards';
import '../../sass/forms.scss';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-header">
                <h3><span>B</span>ienvenue dans votre espace personnel</h3>
                <p>Voici la liste des actions que vous pouvez faire :</p>
              </div>

              <div className="card-body d-flex flex-column justify-content-center">
                <div className="d-flex flex-column justify-content-center mb-3">
                  <h4><span>G</span>estion de propriétés.</h4>
                  <div className="d-flex flex-row">
                    <a href="/addForm" class=" m-2 col-3 text-center btn btn-success">Ajouter un bien à vendre</a>
                    <a href="/modifForm" class=" m-2 col-3 text-center btn btn-success">Modifier un bien en vente</a>
                    <a href="/delForm" class=" m-2 col-3 text-center btn btn-success">Supprimer un bien en vente</a>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center mb-3">
                  <h4><span>G</span>estion profil utilisateur.</h4>
                  <div className="d-flex flex-row">
                    <a href="/addForm" class=" m-2 col-3 text-center btn btn-warning">Modifier mon mot de passe</a>
                    <a href="/delForm" class=" m-2 col-3 text-center btn btn-warning">Modifier mes informations</a>
                  </div>
                </div>
                <div className="d-flex flex-column justify-content-center mb-3">
                  <h4><span>M</span>es propositions d'achat.</h4>
                  <div className="d-flex flex-wrap">
                    <OfferCard name="Villa Aix" price="845 050 €" statut="attente"/>
                    <OfferCard name="Appartement Aix" price="120 200 €" statut="attente"/>
                    <OfferCard name="Maison Pertuis" price="400 000 €" statut="refuse"/>
                    {/*<OfferCard name="Appartement Pertuis" price="120 000 €" statut="accepte"/>*/}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
