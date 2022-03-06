import React, { useEffect } from 'react'
import { Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import BookCard from '../../molecules/BookCard/BookCard'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../store/store'
import { getBooks } from '../../../features/BooksReducer'

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
    const classes = useStyles();
    const dispatch = useDispatch()
    const {books} = useSelector((state: RootState)=> state.books);
    
    useEffect(() => {
       dispatch(getBooks())
    }, [dispatch])

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
                            <BookCard status="lib" children={children} img={item} />
                        </Grid>
                    )
                })
            }
        </Grid>
  )
}

export default BookGrid