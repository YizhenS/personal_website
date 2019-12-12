import React from 'react';
import homepageGif from './img/ezgif-3-536dab28c804.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={homepageGif} className="homepage-img" alt="Under construnction" width="60%"/>
        <p style={{ fontSize: '50%' }}>@YizhenS</p>
      </header>
    </div>
  );
}

export default App;
