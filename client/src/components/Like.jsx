import React, {Component} from 'react';

class Like extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            updated: false,
            likes: 0,
        };   
      }
    
      updateNumLikes = () => {    
        if(!this.state.updated) {
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1,
              updated: true
            };
          });
        } else {   
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes - 1,
              updated: false
            };
          });
    
        }
      }
    render() {
        const colorHeart = this.state.updated ? "#d45a93" : " #535353"

        return (
            <div>
            {this.state.likes}
            <button className="like mx-3 likeBin" onClick={this.updateNumLikes}>
                <i class="fa fa-fg fa-heart" style={{color:colorHeart}}></i>
            </button>
                
            </div>
          )
      }
}

export default Like;