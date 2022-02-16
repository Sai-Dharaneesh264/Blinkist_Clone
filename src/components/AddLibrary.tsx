import React from 'react'
import { Typography, Button } from '@mui/material'
import { AddIcon } from './Icons'
const Data = () => {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img src="/Images/Svg/add.svg" />
            <Typography variant="body1" sx={{color: 'background.default'}}>
                Add to library
            </Typography>
        </div>
    )
}
const AddLibrary = () => {
  return (
    <div>
        <Button color="secondary" variant="contained" sx={{height: '52px', width: '294px'}}>
            <Data />
        </Button>
    </div>
  )
}

export default AddLibrary;