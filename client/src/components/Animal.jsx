import React, {Component} from 'react';
import Lateral from './Lateral';
import Comments from './Comments';
import axios from 'axios';

class Animal extends Component {
  state = {animal:{}};
  componentDidMount(){
    this.getAnimal(this.props.ident);
  }

  getAnimal = (id) => {
    axios.get(`/api/animais/${id}`)
      .then(res => {
        if(res.data){
          this.setState({
            animal: res.data
          });
        }
      })
      .catch(err => console.log(err))
  }

  render() {
    let {animal} = this.state;

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
                    <h2>{animal.Nome}</h2>
                    <p> {animal.Resumo}</p>
                    <p> {animal.Desc}</p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
        <hr />
        <div class="row mt-5">
        </div>
        <div class="row-mt-5 justify-content-center">
          <div class="container col-md-9">
            <Comments coms={animal.Comentarios}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Animal;
