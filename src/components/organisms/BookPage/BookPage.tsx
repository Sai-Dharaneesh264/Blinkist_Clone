import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import BookDetails from '../BookDetails/BookDetails'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { StateProps } from '../../assets/Types'



const BookPage = () => {
  const [bookdata, setBookData] = useState<StateProps>({});
  const { id } = useParams();
  const bookId = (id === undefined) ? '1' : id;
  const getBookDetail = async () => {
      const book = await axios.get(`http://localhost:3004/books/${bookId}`)
      console.log(book.data);
      return book.data;
  }
  useEffect(() => { 
     const getData = async () => {
         const books = await getBookDetail();
         if (books) {
          setBookData(books);
         }     
      }
     getData();
  }, [])



  return (
    <div style={{marginTop: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Typography sx={{display: 'flex', width: '912px'}}>
    Get the key ideas from
    </Typography>
    <div style={{ marginTop: '40px', width: '912px', display: 'flex', justifyContent: 'space-between'}}>
        <BookDetails bookData={bookdata} />
        <img src={bookdata.image} alt="book" width="304px" height="304px" />
    </div>
</div>
  )
}

export default BookPage