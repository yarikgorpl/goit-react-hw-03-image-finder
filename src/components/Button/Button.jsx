import React, { Component } from 'react';
import css from 'components/Button/Button.module.css';

class Button extends Component {
  render() {
    return (
      <div className={css.container_Button}>
        <button
          type="button"
          className={css.Button}
          onClick={this.props.onClick}
        >
          Load more
        </button>
      </div>
    );
  }
}
export default Button;
