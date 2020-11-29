import React, {Component} from 'react';

class Like extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          likes: 0,
          updated: false
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