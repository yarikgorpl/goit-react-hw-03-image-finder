import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import React, { Component } from 'react';
import css from 'components/ImageGallery/ImageGallery.module.css';
import getImages from 'services/api';
import Button from 'components/Button/Button';
import { ThreeDots } from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    image: [],
    isLoading: false,
    page: 1,
    error: null,
    activeImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchImage } = this.props;
    if (prevProps.searchImage !== searchImage || prevState.page !== page) {
      this.setState({ isLoading: true });
      getImages(searchImage, page)
        .then(response => response.json())
        .then(image =>
          this.setState(prevValue => ({
            image: [...prevValue.image, ...image.hits],
          }))
        )
        .catch(error => this.setState({ error: error.message }))
        .finally(() => this.setState({ isLoading: false }));
    }

    if (prevProps.searchImage !== searchImage) {
      this.resetQuerry();
    }
  }

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  resetQuerry = () => {
    this.setState({ page: 1, image: [] });
  };
  render() {
    const { image, isLoading } = this.state;
    return (
      <>
        {isLoading && <ThreeDots />}
        <ul className={css.ImageGallery}>
          {image && <ImageGalleryItem image={image} />}
        </ul>
        {this.props.searchImage && image.length % 12 === 0 && (
          <Button onClick={this.onButtonClick} />
        )}
      </>
    );
  }
}
export default ImageGallery;
