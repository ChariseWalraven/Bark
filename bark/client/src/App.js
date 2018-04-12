import React, { Component } from 'react';
import DislikeButton from './components/Dislike'
import LikeButton from './components/likeButton'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello World!</p>
      <div className="button-container">
      <DislikeButton className="Dislike-Button"/>
      <LikeButton className="like-Button"/>
      </div>
      </div>
    );
  }
}

export default App;
