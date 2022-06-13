
import './GalleryItem.css';
import {useState} from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

function GalleryItem({galleryItem,updateNumLikes, deleteGalleryItem}){
    
    const [ClickedPic,setClickedPic] = useState(false)

    return(
        <div >
            <Card className='galleryItem' sx={{ minWidth: 275 }}>
                <CardContent
                /*
                If user click on card content it display either
                image or description of picture
                */
                    onClick={()=>{
                        if(ClickedPic === true){
                            setClickedPic(false)
                        } else if( ClickedPic === false){
                            setClickedPic(true)
                        } 
                    }}
                >
                    {(!ClickedPic)? <img src={galleryItem.path}/> : 
                    <Typography paragraph variant="h4" component="div">
                        {galleryItem.description}
                     </Typography>}
                
                </CardContent>
                <ButtonGroup>
                    <Button
                        variant="contained"
                        onClick={()=>{
                            updateNumLikes(galleryItem.id,galleryItem.likes)
                        }}
                    >
                        Love it
                    </Button>
                    <Button
                        color='error'
                        variant="contained"
                        onClick={()=>{
                            deleteGalleryItem(galleryItem.id)
                        }}
                    >
                        {/* icon of trash */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </Button> 
                </ButtonGroup>
                <Typography paragraph component="div">
                    {/* if number of like is number then 0 display number of likes, otherwise display No body love it   */}
                { (galleryItem.likes > 0) ? <p>{galleryItem.likes} People love it!</p>: <p>No body love it 😞</p> }
                </Typography>
                
            </Card>
        </div>
        
    )
}


export default GalleryItem;

