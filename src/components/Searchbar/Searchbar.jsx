import React, { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';

class Searchbar extends Component {
  state = {
    name: '',
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  handleInputChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
  };

  reset = () => {
    this.setState({
      name: '',
    });
  };
  render() {
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
