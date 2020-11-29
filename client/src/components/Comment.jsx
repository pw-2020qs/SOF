import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Like from './Like';

class Comment extends Component {

  render() {
    return (
      <div class="media mt-3">
        <img class="mr-3" src="../100x100.png" alt="Generic placeholder image" />
        <div class="media-body">
          <h5 class="mt-0">{this.props.nome}</h5>
          {this.props.texto}
          <Like />
        </div>
      </div>
    );
  }
}

export default Comment;
