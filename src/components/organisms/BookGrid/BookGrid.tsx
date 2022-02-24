import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import BookCard from '../../molecules/BookCard/BookCard'
import axios from 'axios'
import { StateProps } from '../../assets/Types'
import { getAllBooks } from '../../apis/Requests'
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
    const [books, getBooks] = useState<StateProps[]>([]);
    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            const allBooks = await getAllBooks();
            if (allBooks) {
                getBooks(allBooks)
            }
        }
        getData();
    }, [])

  return (
        <Grid data-testid="grid_container" container  sx={{width: '912px', marginTop: '25px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px'}}>
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