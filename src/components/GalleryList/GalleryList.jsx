import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({galleryItems,updateNumLikes, deleteGalleryItem}){
    console.log(galleryItems);
    return(
        <div className="GalleryList">  
            {
                galleryItems.map((galleryItem)=>{
                   return (<GalleryItem deleteGalleryItem={deleteGalleryItem} updateNumLikes={updateNumLikes} key={galleryItem.id} galleryItem={galleryItem}/>)
                })
            }
        </div>
    )
}

export default GalleryList;