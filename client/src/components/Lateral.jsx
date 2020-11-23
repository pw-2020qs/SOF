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
          <div class="bg-secondary">
    
          <nav id="sidebar">

            <ul class="list-group">
                <li class="list-group-item bg-transparent">
                  <Link to="/home">Início</Link>
                </li>
                <li class="lateral list-group-item bg-transparent">
                    <a href="#animaisSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Espécies</a>
                    <ul class="collapse list-unstyled lateralDropdown" id="animaisSubmenu">
                        
                        <li>
                            <a href="#">Região 1</a>
                        </li>
                        <li>
                            <a href="#">Região 2</a>
                        </li>
                        <li>
                            <a href="#">Região 3</a>
                        </li>
                    </ul>
                </li>
                <li class="list-group-item bg-transparent">
                  <Link to="/ongs">ONGs</Link>
                </li>
                <li class="list-group-item bg-transparent">
                  <Link to="/pantanal">O Pantanal</Link>
                </li>
                <li class="list-group-item bg-transparent">
                  <Link to="/galeria">Galeria</Link>
                </li>
            </ul>
        </nav>

        
        <div id="content">
            
        </div>

      </div>
      </div>
      </div>
      
        // <div class="col-md-3 lateral">
        //   <div class="bg-secondary">
        //     <ul class="list-group">
        //       <li class="list-group-item bg-transparent">
        //         <Link to="/animais">Espécies</Link>
        //       </li>
        //       <li class="list-group-item bg-transparent">
        //         <Link to="/ongs">ONGs</Link>
        //       </li>
        //       <li class="list-group-item bg-transparent">
        //         <Link to="/pantanal">O Pantanal</Link>
        //       </li>
        //       <li class="list-group-item bg-transparent">
        //         TODO
        //       </li>
        //     </ul>
        //   </div>
        // </div>
    )
  }
}

export default Lateral;
