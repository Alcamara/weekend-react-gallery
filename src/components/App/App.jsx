import React from 'react';
import './App.css';
import  {useEffect, useState} from 'react'
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import GalleryInput from '../GalleryInput/GalleryInput';
import GalleryHeader from '../GalleryHeader/GalleryHeader';
import swal from 'sweetalert';

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

/* 
function that takes in path/url and description of image 
from Gallery input component and send it to 
database. 
  */

function AddGalleryItem(pathInput,descriptionInput){
  
  if(pathInput === '' || descriptionInput === ''){
        swal('Opps!','Please Enter All Fields','error')
  }else{
    swal('Great','Image Was Added','success')
    axios({
      url:'/Gallery',
      method:'POST',
      data:{
        path: pathInput,
        description: descriptionInput
      }
    }).then(()=>{
      console.log('Post request work');
      fetchGalleryItems()
    }).catch((err)=>{
      console.log('Post request failed',err);
    })
  }
}

/* 
function send an axios delete request to remove 
picture from table base on id
*/
function deleteGalleryItem(id){
    console.log(id);

    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this image",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Poof! Your image has been deleted!", {
          icon: "success",
        });

        axios({
          url:`/gallery/${id}`,
          method:'DELETE'
        }).then(()=>{
          console.log('Put request worked');
          fetchGalleryItems()
        }).catch((err)=>{
          console.log('Put request failed', err);
        })

      } else {
        swal("Your image file is safe!");
      }

    });

}
 
    return (
      <div className="App">
        <GalleryHeader/>
        <GalleryInput AddGalleryItem={AddGalleryItem}/>
        {/* prop galleryItems to GalleryList */}
        <GalleryList deleteGalleryItem={deleteGalleryItem} updateNumLikes={updateNumLikes} galleryItems={galleryItems}/>
        
      </div>
    );
}

export default App;
