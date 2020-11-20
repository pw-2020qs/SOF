import React, {Component} from 'react';
import { Link } from "react-router-dom";

class AnimalCard extends Component {
  render() {
    let path = `/animais/${this.props.ident}`;
    return (
      <Link to={path} class="card">
        <img class="card-img-top" src={this.props.img_src} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{this.props.nome}</h5>
          <p class="card-text">
            {this.props.resumo}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </Link>
    );
  }
}

export default AnimalCard;
