import React from 'react'
import { Button, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { RightArrowIcon, TimeIcon } from '../Icons'
import Buttons from '../atoms/Buttons/Buttons'
const bookCardStyles = makeStyles({
    icon: {
        width: '16.67px',
        height: '16.67px'
    },
   
})
const BookDetails = () => {
    const classes = bookCardStyles();
    return (
        <div style={{height: '304px', }}>
            <Typography variant="h1">
            Beyond Entrepreneurship 2.0
            </Typography>
            <Typography sx={{marginTop: '24px', fontSize: '20px', lineHeight: '25.14px', fontStyle: 'normal', fontWeight: '400', width: '509'}}>
            Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant="body1"  sx={{marginTop: '24px', color: 'text3.main'}}>
            By Jim Collins and Bill Lazier
            </Typography>
            <Typography variant="caption" sx={{display: 'flex', alignItems: 'center', marginTop: '19px'}}>
                            <TimeIcon className={classes.icon}/>
                            <div>
                                13-minute read
                            </div>
            </Typography>
           <Buttons />
        </div>
    )
}

export default BookDetails