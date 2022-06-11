import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({galleryItems,updateNumLikes}){
    console.log(galleryItems);
    return(
        <div className="GalleryList">  
            {
                galleryItems.map((galleryItem)=>{
                   return (<GalleryItem updateNumLikes={updateNumLikes} key={galleryItem.id} galleryItem={galleryItem}/>)
                })
            }
        </div>
    )
}

export default GalleryList;