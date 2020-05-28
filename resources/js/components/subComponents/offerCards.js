import React, {Component} from 'react';
import '../../../sass/offerCards.scss';

class CardProperty extends Component{
  render(){
    return(
      <div className="card m-2 col-3 d-flex-flex-column p-2">
        <h4><span>P</span>ropriété :</h4>
        <p>{this.props.name}</p>
        <br/>
        <h4><span>O</span>ffre :</h4>
        <p>{this.props.price}</p>
        <br/>
        <h4><span>S</span>tatut :</h4>
        <h4><span className={`badge badge-${this.props.statut}`}>{this.props.statut}</span></h4>

        <div className="card-body d-flex flex-column text-center">
          <button className="btn btn-success">Accepter</button>
          <button className="btn btn-danger mt-2">Supprimer</button>
        </div>
      </div>
    )
  }
}

export default CardProperty;
