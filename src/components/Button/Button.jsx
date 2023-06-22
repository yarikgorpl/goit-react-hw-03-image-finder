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
          ///Не можу зрозуміти,як правильно передати довантаження картинок з пропсів при кліці на кнопку
          // onClick={() => {
          //   this.setState({ isLoading: true });
          //   getImage(this.props.image)
          //     .then(response => response.json())
          //     .then(image =>
          //       this.setState({ image: [...prevpProps, this.props.image] })
          //     )
          //     .finally(() => this.setState({ isLoading: false }));
          // }}
        >
          Load more
        </button>
      </div>
    );
  }
}
export default Button;
