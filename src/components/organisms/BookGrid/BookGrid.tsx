import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import BookCard from '../../molecules/BookCard/BookCard'
import axios from 'axios'

const useStyles = makeStyles({
    grid: {
        marginTop: '25px', 
        display: 'flex', 
        justifyContent: 'center'
    },
    items: {

    }
})

interface Props {
    children: React.ReactNode;
    label?:string;
}


const BookGrid = ({children, label}: Props) => {
    const [books, getBooks] = useState<stateProps[]>([]);
    const classes = useStyles();
   

    useEffect(() => {
        const getAllBooks = async () => {
           const res = await axios.get('http://localhost:3004/books')
            .then(response => {
                return response.data;                
            })
            getBooks(res);
        }
        getAllBooks();
    }, [])

  return (
        <Grid container  sx={{width: '912px', marginTop: '25px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px'}}>
            {
                label === undefined ?
                books.map((book) => {
                    return (
                        <Grid item className={classes.items}>
                            <BookCard children={children} img={book}/>
                        </Grid>
                    )
                }) : 
                books.filter((book) => book.status === label).map(item => {
                    return (
                        <Grid item className={classes.items}>
                            <BookCard children={children} img={item} />
                        </Grid>
                    )
                })
            }
        </Grid>
  )
}

export default BookGrid