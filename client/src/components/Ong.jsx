import React, {Component} from 'react';
import Lateral from './Lateral';

let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
Nihil ad,ex eaque fuga minus reprehenderit asperiores earum incidunt.\
Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus\
reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta\
omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
Nihil ad,ex eaque fuga minus reprehenderit asperiores earum incidunt.\
Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus\
reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta\
omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
Nihil ad,ex eaque fuga minus reprehenderit asperiores earum incidunt.\
Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus\
reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta\
omnis debitis quam ab nemo necessitatibus."

class Ong extends Component {
  render() {
    return (
      <div class="container mb-5">
        <div class="row mt-5">
        <Lateral />
        <div class="col-md-9">
          <div class="container">
            <article class="row">
              <div class="col-md-12">
                <div class="image-wrapper float-left pr-3">
                  <img src="../300x400.png" alt=""/>
                </div>
                <div class="text-left">
                  {text}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Ong;
