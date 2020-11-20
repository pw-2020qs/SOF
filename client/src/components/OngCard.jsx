import React, {Component} from 'react';
import { Link } from "react-router-dom";

class OngCard extends Component {
  render() {
    let path = `/ongs/${this.props.ident}`;
    return (
      <Link to={path} class="card">
        <img class="card-img-top" src={this.props.img_src} alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">Ong {this.props.ident}</h5>
          <p class="card-text">
            {this.props.short_desc}
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </Link>
    );
  }
}

export default OngCard;
