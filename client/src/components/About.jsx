import React, {Component} from 'react';
import Lateral from './Lateral';

function About() {
  return (
    <div class="container">
      <div class="row mt-5">
        <Lateral />
        <div class="col-md-9 bg-dark w-100">
          <h2> About Us </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
