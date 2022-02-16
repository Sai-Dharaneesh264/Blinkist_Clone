import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material'
import image from '../Images/2.png'
import { ReadIcon, TimeIcon } from '../Icons'
import AddLibrary from '../AddLibrary'


const BookCard = () => {

  return (
    <div>
        <Card>
            <CardMedia  
                component="img"
                image={image}
            />
            <CardContent>
               <Typography variant="subtitle1">
                    Beyond Entrepreneurship
               </Typography>
               <Typography variant="body1">
                    Jim Collins & Bill Lazier
               </Typography>
               
            </CardContent>
            <CardActions>
                <AddLibrary />
            </CardActions>
        </Card>
    </div>
  )
}

export default BookCard