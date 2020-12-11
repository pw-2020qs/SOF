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
          <div class="col-md-9 w-100">
            <h2 class = "bg-dark"><br/>Banner<br/><br/></h2>
            <p><br/><strong>Bem vindo(a) ao portal de ajuda do Pantanal. Você sabia que ele corre risco?</strong><br/>
              <br/>Aqui, disponibilizamos principais informações sobre o bioma, desde espécies ameaçadas até organizações
              não-governamentais que atuam no ramo. 
              <br/><br/>Se desejar visualizar a beleza e o perigo que o pantanal corre, 
              há também uma galeria de imagens a sua disponição.<br/><br/>
              Ah, e é possível interagir com outros usuários nas páginas de cada espécie e ONG!<br/><br/>
              Esperamos que tire proveito de seu tempo conosco para se informar e compartilhar ideias.<br/><br/>
              Estamos correndo contra o relógio; e cada ação, por menor que seja, conta.<br/>
            </p>
                 <br/><br/>
                 <Carousel />
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
        </div>
      </div>
    );
  }
}

export default Main;

//<Animal img_src="https://placeimg.com/150/150/animals" animal_desc={text}/>
