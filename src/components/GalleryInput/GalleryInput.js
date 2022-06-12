import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Alert from '@mui/material/Alert';

function GalleryInput({AddGalleryItem}){
    const [pathInput,setPathInput] = useState('');
    const [descriptionInput,setDescriptionInput] = useState('');
    const [open, setOpen] = useState(false);

    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m:1,width:'25ch'},
            }}
            noValidate
            autoComplete='off'
        >
                
                <TextField 
                    onChange={(evt)=>{
                        setPathInput(evt.target.value)
                        console.log(pathInput);
                    }}
                    value={pathInput} 
                    required  
                    size="small"  
                    label="Path" 
                    variant="outlined" />
                <TextField
                    onChange={(evt)=>{
                        setDescriptionInput(evt.target.value)
                    }} 
                    value={descriptionInput} 
                    required  
                    size="small"  
                    label="Description" 
                    variant="outlined" />
                    
                <Button
                    size='large'
                    variant="contained"  
                    onClick={()=>{
                        console.log('in form');
                        AddGalleryItem(pathInput,descriptionInput)
                        setDescriptionInput('')
                        setPathInput('')
                        
                    }}
                >Submit</Button>
        
        </Box>
    )
}

export default GalleryInput;

