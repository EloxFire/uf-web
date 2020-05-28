import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey, faHandsHelping, faHandHoldingUsd, faStore, faHome } from '@fortawesome/free-solid-svg-icons';
import '../../../sass/menu.scss';

class Menu extends Component{
  render(){
    return(
      <div class="links mb-5 col-12 text-center">
      <a class="linksMenu" href="/"><FontAwesomeIcon icon={faHome}/> Accueil</a>
        <a class="linksMenu" href="/buy"><FontAwesomeIcon icon={faKey}/> Achat</a>
        <a class="linksMenu" href="/home"><FontAwesomeIcon icon={faHandsHelping}/> Vente</a>
        <a class="linksMenu" href=""><FontAwesomeIcon icon={faHandHoldingUsd}/> Location</a>
        <a class="linksMenu" href=""><FontAwesomeIcon icon={faStore}/> Nos agences</a>
      </div>
    )
  }
}

export default Menu;
