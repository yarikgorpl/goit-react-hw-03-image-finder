import React, { Component } from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Button from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { ThreeDots } from 'react-loader-spinner';
import getImages from 'services/api';
import css from 'components/ImageGallery/ImageGallery.module.css';

import PropTypes from 'prop-types';
class ImageGallery extends Component {
  state = {
    image: [],
    isLoading: false,
    page: 1,
    error: null,
    activeImage: '',
    showModal: false,
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
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  imageForModal = data => {
    this.setState({ activeImage: data });
  };

  onButtonClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };
  resetQuerry = () => {
    this.setState({ page: 1, image: [] });
  };
  render() {
    const { image, isLoading, showModal } = this.state;

    return (
      <>
        {isLoading && <ThreeDots />}
        {showModal && (
          <Modal onToggleModal={this.toggleModal}>
            <img
              src={this.state.activeImage.largeImageURL}
              alt={this.state.activeImage.tags}
            />
          </Modal>
        )}
        <ul className={css.ImageGallery}>
          {image &&
            image.map(el => {
              return (
                <ImageGalleryItem
                  key={el.id}
                  imageClick={() => this.imageForModal(el)}
                  openModal={this.toggleModal}
                  {...el}
                />
              );
            })}
        </ul>
        {this.props.searchImage && image.length % 12 === 0 && (
          <Button onClick={this.onButtonClick} />
        )}
      </>
    );
  }
}
export default ImageGallery;
ImageGallery.propTypes = {
  key: PropTypes.string,
  imageClick: PropTypes.func,
  openModal: PropTypes.func,
};
