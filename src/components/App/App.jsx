import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
// import Button from 'components/Button/Button';
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
        <button onClick={this.toggleModal}>Togle</button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              quis.
            </p>
            <img src="" alt="" />
          </Modal>
        )}
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery searchImage={this.state.searchImage} />
      </div>
    );
  }
}
