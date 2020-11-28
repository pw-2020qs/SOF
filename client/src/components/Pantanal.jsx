import React, {Component} from 'react';
import Lateral from './Lateral';

function Pantanal() {
  return (
    <div class="container">
      <div class="row mt-5">
        <Lateral />
        <div class="col-md-9 w-100">
            <h2 class = "bg-dark"><br/>O Pantanal<br/><br/></h2>
            <p><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget egestas nulla. Mauris placerat tempor lectus a convallis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis nisi elit, blandit cursus venenatis sit amet, condimentum et turpis. Sed congue felis a justo dictum, fringilla vestibulum velit tincidunt. Ut faucibus mauris tortor, non fringilla sapien blandit eu. Nullam et fringilla neque. Maecenas pulvinar, quam eget posuere lobortis, ipsum orci bibendum felis, posuere rutrum sem metus vitae urna.
              <br/>
              Aliquam maximus varius neque, et finibus nisl pellentesque et. Mauris aliquet tincidunt auctor. Nam faucibus nisi eget lobortis facilisis. Nulla eu ipsum et felis cursus pellentesque nec ut turpis. Integer laoreet diam eget arcu ullamcorper, quis tempus metus accumsan. Vestibulum sit amet sapien viverra, semper odio vitae, viverra ex. Nullam lobortis risus non tellus suscipit, a laoreet nulla efficitur.
            </p>
          </div>
      </div>
    </div>
  );
}

export default Pantanal;
