import GalleryItem from "../GalleryItem/GalleryItem";
import './GalleryList.css'

function GalleryList({galleryItems}){
    console.log(galleryItems);
    return(
        <div className="GalleryList">  
            {
                galleryItems.map((galleryItem)=>{
                   return (<GalleryItem key={galleryItem.id} galleryItem={galleryItem}/>)
                })
            }
        </div>
    )
}

export default GalleryList;