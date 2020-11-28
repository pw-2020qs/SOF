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
      <div class="col-md-3 lateral">
        <div class="wrapper">
          <div class="navbar-custom bg-secondary listLateral">
            <nav id="sidebar">
              <ul class="no-bullets listLateral list-group">
                  {/* dois li para a borda da navbar não aparecer no zoom do hover */}
                  <li class="list-group-item bg-transparent">
                    <li class ="liLateral">
                    <Link to="/home">Início</Link></li>
                  </li>
                  <li class="lateral list-group-item bg-transparent">
                    <li class ="liLateral">
                      <a class ="liLateral" href="#animaisSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Espécies</a>
                      <ul class="collapse list-unstyled lateralDropdown" id="animaisSubmenu">
                          <li class ="liLateral">
                              <Link to="/animais">Ameaçadas</Link>
                          </li>
                          <li class ="liLateral">
                              <a href="/animais">Criticamente ameaçadas</a>
                          </li>
                      </ul>
                    </li>
                  </li>
                  <li class="list-group-item bg-transparent">
                    <li class ="liLateral">
                      <Link to="/ongs">ONGs</Link>
                      </li>
                  </li>
                  <li class="list-group-item bg-transparent">
                    <li class ="liLateral">
                      <Link to="/pantanal">O Pantanal</Link>
                    </li>
                  </li>
                  <li class="list-group-item bg-transparent">
                    <li class ="liLateral">
                      <Link to="/galeria">Galeria</Link>
                    </li>
                  </li>
                </ul>
            </nav>
            <div id="content">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Lateral;
