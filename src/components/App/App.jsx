import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import css from './App.module.css';

export default class App extends Component {
  state = {
    searchImage: '',
    showModal: false,
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div className={css.App}>
        {showModal && (
          <Modal onToggleModal={this.toggleModal}>
            <img src={this.props.largeImageURL} alt="" />
          </Modal>
        )}
        <Searchbar onSearchSubmit={this.handleFormSubmit} />
        <ImageGallery searchImage={this.state.searchImage} />
      </div>
    );
  }
}
