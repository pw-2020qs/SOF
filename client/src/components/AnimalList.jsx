import React, {Component} from 'react';
import AnimalCard from './AnimalCard';
import Lateral from './Lateral';
import axios from 'axios';

const image = "./200x200.png";

class AnimalList extends Component {

  state = {
    animais: []
  }

  componentDidMount(){
    this.getAnimals();
  }

  getAnimals = () => {
    axios.get('/api/animais')
      .then(res => {
        if(res.data){
          this.setState({
            animais: res.data
          })
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log("teste");
    console.log(this.state);
    let {animais} = this.state;

    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <div class="col-md-9">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-columns">
                    {
                      animais.map(animal => {
                        return <AnimalCard nome={animal.Nome} resumo={animal.Resumo} img_src={image} ident={animal._id} key={animal._id} />
                      })
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AnimalList;
