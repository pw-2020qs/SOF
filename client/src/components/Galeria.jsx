import React, {Component} from 'react';
import Lateral from './Lateral';
import { SRLWrapper} from 'simple-react-lightbox'
import SimpleReactLightbox from 'simple-react-lightbox'


class Galeria extends Component {

  render() {
    const gallery_image = [];
    for (let i = 0; i < 12; i++) {
      gallery_image.push(<img class="mb-4 mx-2 img" width="300" height="200" alt ="Imagem do Pantanal" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg"/>);
    }
    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <div class="col-md-9">
            <div class="container">
                <SimpleReactLightbox>
                  <SRLWrapper>
                    {gallery_image}
                  </SRLWrapper>
                </SimpleReactLightbox>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Galeria;
