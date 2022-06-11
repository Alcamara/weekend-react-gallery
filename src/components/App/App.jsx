import React from 'react';
import './App.css';
import  {useEffect, useState} from 'react'
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  const [galleryItems,setGalleryItems] = useState([]);

/*
On page load fetch data
from server
*/
  useEffect(()=>{
    fetchGalleryItems()
  },[])

/*
create arrow function to get arrow
function to get data from server
*/
 let  fetchGalleryItems = () =>{
   axios({
     url:'gallery',
     method:'GET',
   })
    .then((response)=>{
      //set GalleryItem state
      setGalleryItems(response.data)
      
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
        {/* prop galleryItems to GalleryList */}
        <GalleryList galleryItems={galleryItems}/>
        
      </div>
    );
}

export default App;
