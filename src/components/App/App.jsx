import React from 'react';
import './App.css';
import  {useEffect, useState} from 'react'
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import GalleryInput from '../GalleryInput/GalleryInput';

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
     url:'/gallery',
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

/*
Create a function that increment
like by one sent data to server then 
return the updated like count
*/  

function updateNumLikes(id, numLikes){
  console.log('it worked',id,numLikes);

  
  console.log(numLikes);

  axios({
    url:`/gallery/like/${id}`,
    method:'PUT'
  }).then(()=>{
    console.log('Put request worked');
    fetchGalleryItems()
  }).catch((err)=>{
    console.log('Put request failed', err);
  })

}
 
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryInput/>
        <p>Gallery goes here</p>
        {/* prop galleryItems to GalleryList */}
        <GalleryList updateNumLikes={updateNumLikes} galleryItems={galleryItems}/>
        
      </div>
    );
}

export default App;
