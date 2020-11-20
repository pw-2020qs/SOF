import React, {Component} from 'react';
import Lateral from './Lateral';
import AnimalList from './AnimalList';

class List extends Component {
  render() {
    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <AnimalList />
        </div>
      </div>
    );
  }
}

export default List;
