import React, {Component} from 'react';
import OngCard from './OngCard';
import Lateral from './Lateral';

const image = "./200x200.png";
const desc = "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."

class OngList extends Component {

  render() {
    const cards = [];
    for (let i = 0; i < 10; i++) {
      cards.push(<OngCard short_desc={desc} img_src={image} ident={i} />);
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

export default OngList;
