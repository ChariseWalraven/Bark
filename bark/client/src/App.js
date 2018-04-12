import React, { Component } from 'react';
import DislikeButton from './components/Dislike'
import Image from './components/Image'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello World!</p>
        <div className="image-container">
        <Image className="Image"/>
        <DislikeButton className="Dislike-Button"/>
        </div>
      </div>
    );
  }
}

export default App;
