import React, {Component} from 'react';
import Lateral from './Lateral';
import GalleryImage from './GalleryImage';

const image = "./200x200.png";
const desc = "Pantanal image"

class Galeria extends Component {

  render() {
    const gallery_image = [];
    for (let i = 0; i < 12; i++) {
      gallery_image.push(<GalleryImage short_desc={desc} img_src={image} ident={i} />);
    }
    return (
      <div class="container">
        <div class="row mt-5">
          <Lateral />
          <div class="col-md-9">
          <div id="mdb-lightbox-ui">
          </div>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="card-columns">
                    {gallery_image}
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

export default Galeria;
