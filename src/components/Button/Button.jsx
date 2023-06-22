import React, { Component } from 'react';
import css from 'components/Button/Button.module.css';
import getImage from 'services/api';
class Button extends Component {
  render() {
    return (
      <div className={css.container_Button}>
        <button
          type="button"
          className={css.Button}
          onClick={() => {
            this.setState({ isLoading: true });
            getImage(this.props.image)
              .then(response => response.json())
              .then(image => this.setState({ image: [this.props.image] }))
              .finally(() => this.setState({ isLoading: false }));
          }}
        >
          Load more
        </button>
      </div>
    );
  }
}
export default Button;
