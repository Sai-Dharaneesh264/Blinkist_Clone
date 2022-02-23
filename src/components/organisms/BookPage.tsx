import React from 'react'
import { Typography } from '@mui/material'
import BookDetails from './BookDetails'
import image from '../Images/2.png'
const BookPage = () => {
  return (
    <div style={{marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Typography sx={{display: 'flex', width: '912px'}}>
    Get the key ideas from
    </Typography>
    <div style={{ marginTop: '40px', width: '912px', display: 'flex', justifyContent: 'space-between'}}>
        <BookDetails />
        <img src={image} alt="book" width="304px" height="304px" />
    </div>
</div>
  )
}

export default BookPage