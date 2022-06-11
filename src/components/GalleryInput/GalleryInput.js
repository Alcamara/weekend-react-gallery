import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function GalleryInput(){
    const [pathInput,setPathInput] = useState('');
    const [descriptionInput,setDescriptionInput] = useState('');
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': {m:1,width:'25ch'},
            }}
            noValidate
            autoComplete='off'
        >
           
                <TextField required  size="small"  label="Path" variant="outlined" />
                <TextField required  size="small"  label="Description" variant="outlined" />
                <Button
                    size='large'
                    variant="contained"  
                    onClick={()=>{
                        console.log('in form');
                    }}
                >Submit</Button>
        
        </Box>
    )
}

export default GalleryInput;

