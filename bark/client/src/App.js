import React, { Component } from 'react';
import DislikeButton from './components/Dislike'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <p>Hello World!</p>
      <DislikeButton className="Dislike-Button"/>
      </div>
    );
  }
}

export default App;
