import Animal from './Animal';
import Lateral from './Lateral';
import Carousel from './Carousel';
import React, {Component} from 'react';

class Main extends Component {
  render() {
    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <div class="col-md-9 bg-dark w-100">
            <h2> Front </h2>
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
          <Carousel />
        </div>
      </div>
    );
  }
}

export default Main;

//<Animal img_src="https://placeimg.com/150/150/animals" animal_desc={text}/>
