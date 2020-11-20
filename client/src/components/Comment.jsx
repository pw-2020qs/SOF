import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Comment extends Component {
  render() {
    return (
      <div class="media">
        <img class="mr-3" src="../100x100.png" alt="Generic placeholder image" />
        <div class="media-body">
          <h5 class="mt-0">Fulano de Tal</h5>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </div>
      </div>
    );
  }
}

export default Comment;
