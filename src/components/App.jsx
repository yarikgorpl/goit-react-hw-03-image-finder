import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    //
    // filter: '',
  };
  addImage() {
    console.log('new image');
  }
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
          flexDirection: 'column',
        }}
      >
        <Searchbar onSubmit={this.addImage} />
      </div>
    );
  }
}
export default App;
