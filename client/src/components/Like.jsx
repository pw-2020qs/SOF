import React, {Component} from 'react';
import axios from 'axios';

class Like extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        likes: props.likes,
        updated: false
      };
    }

    saveLike = (id, com_id, num_likes) => {

    }

    updateNumLikes = () => {
      if(!this.state.updated) {
        this.setState((prevState, props) => {
          return {
            likes: prevState.likes + 1,
            updated: true
          };
        });
        let msg = {likes: this.state.likes+1};
        axios.post(`/api/animais/${this.props.animal}/comments/${this.props.ident}`, msg)
        .catch(err => console.log(err));
      } else {
        this.setState((prevState, props) => {
          return {
            likes: prevState.likes - 1,
            updated: false
          };
        });
        let msg = {likes: this.state.likes-1};
        axios.post(`/api/animais/${this.props.animal}/comments/${this.props.ident}`, msg)
        .catch(err => console.log(err));
      }
    }
    render() {
      return (
        <div>
          {this.state.likes}
          <button className="like mx-3 likeBin" onClick={this.updateNumLikes}>
            <i class="fa fa-fg fa-heart"></i>
          </button>
        </div>
      )
    }
}

export default Like;
