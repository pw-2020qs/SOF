import React, {Component} from 'react';
import Lateral from './Lateral';

const image = "./200x200.png";

class Galeria extends Component {
  
  render() {
  const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<img src={image}/>);
    }
    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <div class="col-md-9">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-columns">
                    {cards}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galeria;
