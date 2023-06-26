import React, { Component } from 'react';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import css from './App.module.css';
import PropTypes from 'prop-types';
export default class App extends Component {
  state = {
    searchImage: '',
  };

  handleFormSubmit = searchImage => {
    this.setState({ searchImage });
  };

  render() {
    return (
      <div className={css.App}>
        <Searchbar onSearchSubmit={this.handleFormSubmit} />
        <ImageGallery searchImage={this.state.searchImage} />
      </div>
    );
  }
}
App.propTypes = {
  onSearchSubmit: PropTypes.func,
  searchImage: PropTypes.string,
};
