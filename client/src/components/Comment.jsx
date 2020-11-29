import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Like from './Like';

class Comment extends Component {

  render() {
    return (
      <div class="media mt-4">
        <img class="mr-3" src="../100x100.png" alt="Generic placeholder image" />
          <div class="media-body">
            <h5 class="mt-0">{this.props.info.Nome}</h5>
            {this.props.info.Texto}
          </div>
          <div class = "mx-4">
            <Like likes={this.props.info.Likes} animal={this.props.ident} ident={this.props.info.id}/>
          </div>
        </div>
    );
  }
}

export default Comment;
