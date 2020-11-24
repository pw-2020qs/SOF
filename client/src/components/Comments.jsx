import React, {Component} from 'react';
import { Link } from "react-router-dom";
import Comment from './Comment';

class Comments extends Component {

  render() {
    if (!this.props.coms) {
      return <p>Loading ... </p>
    }
    else {
      return (
        <div>
          {
            this.props.coms.map(com => {
              return <Comment nome={com.Nome} texto={com.Texto} />
            })
          }
        </div>
      );
    }
  }
}

export default Comments;
