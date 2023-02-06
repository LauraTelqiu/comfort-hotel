import React from 'react'
import { gallery } from '../data'

function Gallery() {

  return (
    <div className="gallery">
      <h3 className="footer-heading">Gallery</h3>
      <div className="gallery-images">
        {gallery.map((image) => {
          return (
            <div key={image.id} className="image-wrapper">
              <img src={image.img} className="footer-image" />
            </div>
          );
        })}
      </div>
    </div>
  )
}




export default Gallery
