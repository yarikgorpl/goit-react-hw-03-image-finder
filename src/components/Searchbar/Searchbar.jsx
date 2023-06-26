import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';
class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleNameChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    const { searchImage } = this.state;
    if (searchImage.trim() === '') {
      alert('Wow,field is empty!');
      return;
    }
    this.props.onSearchSubmit(searchImage);
    this.setState({
      searchImage: '',
    });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form onSubmit={this.handleSubmit} className={css.SearchForm}>
          <button type="submit" className={css.SearchForm_button}>
            <ImSearch />
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            name="name"
            placeholder="Search images and photos"
            value={this.state.searchImage}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
export default Searchbar;
