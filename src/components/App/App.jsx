import React from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import Axios from 'axios';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <GalleryItem/>
      </div>
    );
}

export default App;
