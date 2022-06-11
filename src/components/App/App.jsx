import React from 'react';
import './App.css';
import  {useEffect, useState} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem';
import axios from 'axios';

function App() {
  const [galleryItems,setGalleryItems] = useState();


  useEffect(()=>{
    fetchGalleryItems()
  },[])

 let  fetchGalleryItems = () =>{
   axios({
     url:'gallery',
     method:'GET',
   })
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log('Get require failed',err);
    })
 }

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
