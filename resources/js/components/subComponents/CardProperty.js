import React, {Component} from 'react';
import villa from '../../../img/villa.jpg';

class CardProperty extends Component{
  render(){
    return(
      <div className="card col-3 m-3">
        <img className="card-img-top" src={villa} alt="Card Image"/>
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
          <p className="card-text">{this.props.desc}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Prix : {this.props.price}</li>
          <li className="list-group-item">Surface : {this.props.area}</li>
          <li className="list-group-item">Pièces : {this.props.room}</li>
          <li className="list-group-item">Chambres : {this.props.bedroom}</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Voir l'anonce</a>
          <a href="#" className="card-link">Faire un offre</a>
        </div>
      </div>
    )
  }
}

export default CardProperty;
