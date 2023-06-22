import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import getImage from 'services/api';
import Button from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    image: [],
    isLoading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchImage !== this.props.searchImage) {
      this.setState({ isLoading: true });
      getImage(this.props.searchImage)
        .then(response => response.json())
        .then(image => this.setState({ image: image.hits }))
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  render() {
    const { image, isLoading } = this.state;
    return (
      <>
        {isLoading && <ThreeDots />}
        <ul className={css.ImageGallery}>
          {image && <ImageGalleryItem image={image} />}
        </ul>
        {this.props.searchImage && <Button onClick={this.state.image} />}
      </>
    );
  }
}
export default ImageGallery;
