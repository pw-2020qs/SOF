import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Main from './Main';
import List from './List';
import About from './About';
import Contact from './Contact';
import AnimalList from './AnimalList';
import Animal from './Animal';
import OngList from './OngList';
import Ong from './Ong';
import Pantanal from './Pantanal';
import Galeria from './Galeria';

//link para icons
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>

function Admin() {
  return <h2>Admin</h2>;
}

function CallAnimal() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();
  console.log("chama animal: "+ id );
  return (
    <Animal ident={id} />
  );
}
function CallOng() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { id } = useParams();

  return (
    <Ong ident={id} />
  );
}


const Navbar = () => {
  return (
    <Router>
      <div class="col">
        <nav class="row navbar navbar-expand-md navbar-dark bg-dark justify-content-between sticky-top">
          <div class="navbar-text">
            <h3>SOF</h3>
          </div>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" class="nav-link" href="#">
                <i class="fa fa-home"></i>
                Início
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/about" class="nav-link" href="#">Sobre nós</Link>
            </li>
            <li class="nav-item">
              <Link to="/contact" class="nav-link" href="#">Contato</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/animais/:id" children={<CallAnimal />} />
          <Route path="/animais">
            <AnimalList />
          </Route>
          <Route path="/ongs/:id" children={<CallOng />} />
          <Route path="/ongs">
            <OngList />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/pantanal">
            <Pantanal />
          </Route>
          <Route path="/galeria">
            <Galeria />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Navbar;
