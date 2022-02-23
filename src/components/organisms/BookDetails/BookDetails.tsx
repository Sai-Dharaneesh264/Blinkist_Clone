import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { TimeIcon } from '../../Icons'
import ButtonsRow from '../../molecules/ButtonsRow/ButtonsRow'
import { stateProps } from '../../assets/Types'
const bookCardStyles = makeStyles({
    icon: {
        width: '16.67px',
        height: '16.67px'
    },
   
})

interface Props {
    bookData: stateProps;
}
const BookDetails = ({ bookData }: Props) => {
    const classes = bookCardStyles();
    return (
        <div style={{height: '304px'}}>
            <Typography variant="h1">
               {bookData.title}
            </Typography>
            <Typography sx={{marginTop: '24px', fontSize: '20px', lineHeight: '25.14px', fontStyle: 'normal', fontWeight: '400', width: '509'}}>
                Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant="body1"  sx={{marginTop: '24px', color: 'text3.main'}}>
                {bookData.author}
            </Typography>
            <Typography variant="caption" sx={{display: 'flex', alignItems: 'center', marginTop: '19px'}}>
                <TimeIcon className={classes.icon}/>
                <div>
                    {bookData.minutes}
                </div>
            </Typography>
          <ButtonsRow />
        </div>
    )
}

export default BookDetails