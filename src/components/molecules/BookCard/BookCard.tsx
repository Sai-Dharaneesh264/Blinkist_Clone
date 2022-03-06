import React, { useEffect, useState } from 'react'
import { TimeIcon, UserIcon } from '../../Icons'
import { Card, CardMedia, CardContent, CardActions, Typography, Link} from '@mui/material'
import { StateProps } from '../../assets/Types'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getBook } from '../../../features/BookReducer'
import { getBooks } from '../../../features/BooksReducer'

import { RootState } from '../../../store/store'
interface Props {
  children?: React.ReactNode;
  img: StateProps;
}

const CardComponent = ({children, img}: Props) => {
  const [state, setState] = useState<boolean>(true);
  const [id, setId] = useState<string | undefined>();
  const { book } = useSelector((state: RootState) => state.book);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBook({id: id, status: img.status}));
  }, [id])
  return (
    <div>
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

        <CardActions onClick={
          () => {
            setId(img.id);
          }
        }>
         {children}
        </CardActions>
      </Card>
    </div>
  )
}

const BookCard = ({ children, img } : Props) => {

  // console.log('label', label);


  return (
    <div>
    {
      img.status === undefined ? 
      <Link href={`http://localhost:3000/bookdetails/${img.id}`} >
        <CardComponent children={children} img={img} />
      </Link>
      :
      <CardComponent children={children} img={img} />
    }
    </div>
  )
}

export default BookCard