import React, {Component} from 'react';
import { Link } from "react-router-dom";

//import { Lightbox } from "react-modal-image";
//import ModalImage from "react-modal-image";

{/* <ModalImage
  small={urlToTinyImageFile}
  large={urlToHugeImageFile}
  alt="Hello World!"
/>; */}

class GalleryImage extends Component {
  render() {
    let path = `#`;
    return (
      //<Link to={path} class="mdb-lightbox-ui">
    <figure class="img mdb-lightbox">
        <a href="#" data-size="1600x1067">
                <div class="ba-0 ds-1">
                    <button data-target="#modalIMG" data-toggle="modal">
                        <img alt = "Pantanal imagem" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" class="img-fluid"/>
                    </button>
                </div>
            </a>
      </figure>
      
      //</Link>
    );
  }
}

export default GalleryImage;
