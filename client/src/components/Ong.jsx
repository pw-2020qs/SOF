import React, {Component} from 'react';
import Lateral from './Lateral';
import Formulario from './Formulario';
import Comments from './Comments';
import axios from 'axios';

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

  state = {ong:{}};
  componentDidMount(){
    this.getOng(this.props.ident);
  }

  getOng = (id) => {
    axios.get(`/api/ongs/${id}`)
      .then(res => {
        if(res.data){
          this.setState({
            ong: res.data
          });
        }
      })
      .catch(err => console.log(err))
  }


  render() {
    let {ong} = this.state;

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
                  {
                    /*<h2>{ong.Nome}</h2>
                    <p> {ong.Resumo}</p>
                    <p><strong>Informações para contato:</strong></p>
                    <p>Telefone: {ong.Telefone}</p>
                    <p>Email: {ong.Email}</p>*/
                  }      
                </div>
              </div>
            </article>
            <hr />
              <Formulario />
              <hr />
              <Comments coms={ong.Comentarios}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Ong;
