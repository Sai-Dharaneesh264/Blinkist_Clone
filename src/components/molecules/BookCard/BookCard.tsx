import React from 'react'
import { TimeIcon, UserIcon } from '../../Icons'
import { Card, CardMedia, CardContent, CardActions, Typography, Link} from '@mui/material'
import { StateProps } from '../../assets/Types'
interface Props {
  children?: React.ReactNode;
  img: StateProps;
}

const BookCard = ({ children, img } : Props) => {

  return (
    <div>
      <Link href={`/bookdetails/${img.id}`}>
      <Card>
        <CardMedia>
          <img src={img.image}  width="100%"/>
        </CardMedia>
        
        <CardContent>
          <Typography variant="subtitle1" sx={{color: 'text2.main'}}>
            {img.title}
          </Typography>
          <Typography variant="body1" sx={{color: 'text3.main'}}>
            {img.author}
          </Typography>
          <div style={{height: '18px', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
           <TimeIcon sx={{width: '16.67px', height: '16.67px'}}/>
            <Typography variant="caption3" sx={{color: 'text3.main'}}>
              {img.minutes}
            </Typography>
          </div>
          {
            img.reads !== "" ?
            <div style={{display: 'flex', alignItems: 'center'}}>
              <UserIcon style={{width:"24px", height:"17.5px", color: 'text3'}} />
              <Typography variant="caption3" sx={{color: 'text3.main'}}>
                1.9k reads
              </Typography>
            </div>
            : undefined
          }
          </div>
        </CardContent>

        <CardActions>
         {children}
        </CardActions>
      </Card>
      </Link>
    </div>
  )
}

export default BookCard