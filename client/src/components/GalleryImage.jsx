import React, {Component} from 'react';
import { Link } from "react-router-dom";

class OngCard extends Component {
  render() {
    let path = `/ongs/${this.props.ident}`;
    return (
      <Link to={path} class="mdb-lightbox-ui">
        <figure class="mdb-lightbox">
        <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
          data-size="1600x1067">
          <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg"
            class="img-fluid"/>
        </a>
      </figure>
      </Link>
    );
  }
}

export default GalleryImage;
