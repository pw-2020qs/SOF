import React, {Component} from 'react';
import { Link } from "react-router-dom";

function Carousel() {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <Link to="/galeria" class="carousel-item active">
          <img class="d-block" src="./800x400.png" alt="First slide"/>
        </Link>
        <Link to="/galeria" class="carousel-item">
          <img class="d-block" src="./800x400.png" alt="Second slide"/>
        </Link>
        <Link to="/galeria" class="carousel-item">
          <img class="d-block" src="./800x400.png" alt="Third slide"/>
        </Link>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>

  );
}

export default Carousel;
