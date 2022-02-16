import React from 'react'
import { Typography } from '@mui/material'
import BookGrid from './BookGrid'
import Buttons from '../atoms/Buttons'
const BooksGroup = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '80px'}}>
        <Typography variant="h3" sx={{width: '912px', marginBottom: "25px"}}>
            Trending blinks
        </Typography>
        <BookGrid children={<Buttons />}/>
        <BookGrid children={<Buttons />}/>
    </div>
  )
}

export default BooksGroup