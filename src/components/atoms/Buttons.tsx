import React, { useState } from 'react'
import { Button, Typography } from '@mui/material'
import { AddIcon } from '../Icons'
const Buttons = () => {
    const [isShown, setIsShown] = useState<boolean>(false);
  return (
    <div style={{width: '100%', height: '52px'}}>
        <Button  
            variant={isShown ? 'text': 'contained'}
            color="secondary" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}
            sx={{width: '100%', alignItems: 'center'}} >
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8px'}}>
                <AddIcon />
            </div>

            <Typography variant='body1'>
                Add to library
            </Typography>
        </Button>
    </div>
  )
}

export default Buttons