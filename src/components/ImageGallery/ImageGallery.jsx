import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    return (
      <ul class="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
export default ImageGallery;
