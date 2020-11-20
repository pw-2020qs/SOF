import React, {Component} from 'react';
import {Link} from "react-router-dom";

let text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
Nihil ad,ex eaque fuga minus reprehenderit asperiores earum incidunt.\
Possimus maiores dolores voluptatum enim soluta omnis debitis quam ab nemo necessitatibus.\
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ad, ex eaque fuga minus\
reprehenderit asperiores earum incidunt. Possimus maiores dolores voluptatum enim soluta\
omnis debitis quam ab nemo necessitatibus."

class Lateral extends Component {
  render() {
    return (
        <div class="col-md-3">
          <div class="bg-secondary">
            <ul class="list-group">
              <li class="list-group-item bg-transparent">
                <Link to="/animais">Animais</Link>
              </li>
              <li class="list-group-item bg-transparent">
                <Link to="/ongs">ONGs</Link>
              </li>
              <li class="list-group-item bg-transparent">
                <Link to="/pantanal">Pantanal</Link>
              </li>
              <li class="list-group-item bg-transparent">
                TODO
              </li>
            </ul>
          </div>
        </div>
    )
  }
}

export default Lateral;
