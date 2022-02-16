import React from 'react'
import { Grid } from '@mui/material'
import BookCard from './BookCard'
import { makeStyles } from '@mui/styles'
import Typographies from '../atoms/Typographies'

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
}
const BookGrid = ({children}: Props) => {
    const classes = useStyles()
  return (
        <Grid container sx={{width: '912px', marginTop: '25px'}}>
            <Grid container item sx={{marginTop: '0px', marginLeft: '0px', width: '912px', justifyContent: 'space-between'}}>
                <Grid item className={classes.items} >
                    {/* {children} */}
                   <Typographies children={children} />
                </Grid>
                <Grid item className={classes.items} >
                   <Typographies children={children} />
                </Grid>
                <Grid item className={classes.items} >
                   <Typographies children={children} />
                </Grid>
            </Grid>
        </Grid>
  )
}

export default BookGrid