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
            <p><br/>Do you ever feel like breaking down?
                 Do you ever feel out of place?
                 Like somehow you just don't belong
                 And no one understands you
                 Do you ever want to run away?
                 Do you lock yourself in your room?
                 With the radio on turned up so loud
                 That no one hears you screaming
                 No you don't know what its like
                 When nothing feels alright
                 You don't know what its like to be like me
                 To be hurt, to feel lost
                 To be left out in the dark
                 To be kicked when you're down
                 To feel like you've been pushed around
                 To be on the edge of breaking down
                 And no one there to save you
                 No you don't know what its like
                 Welcome to my life
                 Do you want to be somebody else?
                 Are you sick of feeling so left out?
                 Are you desperate to find something more
                 Before your life is over</p>
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
