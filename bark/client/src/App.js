import React, { PureComponent } from 'react';
import DislikeButton from './components/Dislike'
import LikeButton from './components/likeButton'
import UserInfo from './components/UserInfo'
import Image from './components/Image'
import './App.css';

class App extends PureComponent {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="title">Bark</h1>
        </header>
        <div className="users-container">
          <UserInfo />
        </div>
        <div className="image-container">
        <Image className="Image"/>
        </div>
        <div className="button-container">
          <DislikeButton className="Dislike-Button"/>
          <LikeButton className="Like-Button"/>
        </div>
      </div>
    );
  }
}

export default App;
