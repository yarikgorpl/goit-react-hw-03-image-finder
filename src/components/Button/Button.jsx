import React, { Component } from 'react';
import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';
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
Button.propTypes = {
  onClick: PropTypes.func,
};
export default Button;
