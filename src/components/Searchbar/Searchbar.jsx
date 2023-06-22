import React, { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import css from 'components/Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    searchImage: '',
  };

  handleNameChange = event => {
    this.setState({ searchImage: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchImage.trim() === '') {
      alert('Wow,field is empty!');
      return;
    }
    this.props.onSubmit(this.state.searchImage);
    this.reset();
  };

  reset = () => {
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
            value={this.state.image}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
