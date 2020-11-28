import React, {Component} from 'react';
import { Link } from "react-router-dom";

class GalleryImage extends Component {
  
    render() {
    let path = `#`;
    return (
      <div class="mdb-lightbox no-margin">  
        <figure class="img mdb-lightbox">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg" data-size="1600x1067">                           
                <img alt = "picture" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg" class="img-fluid"/>
            </a>
          </figure>
          {}
      </div>  
    );
  }
}

export default GalleryImage;
