import React from 'react'
import { Typography, AppBar, Button } from '@mui/material'
import Buttons from './Buttons'

import { SvgIcon, Card, CardMedia, CardContent, CardActions } from '@mui/material'
import Image from '../Images/2.png'

interface Props {
  children?: React.ReactNode;
}

const Typographies = ({ children } : Props) => {
  return (
    <div>
      <Card>
        <CardMedia
          component="img"
          src={Image}
        />
        <CardContent>
          <Typography variant="subtitle1" sx={{color: 'text2.main'}}>
            Lives of the Stoics
          </Typography>
          <Typography variant="body1" sx={{color: 'text3.main'}}>
            Ryan Holiday, Stephen Hansel
          </Typography>
          <div style={{height: '18px', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <SvgIcon color="text3" sx={{width: '16.67px', height: '16.67px'}}>
              <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20V20ZM13 12H17V14H11V7H13V12Z" />
            </SvgIcon>
            <Typography variant="caption3" sx={{color: 'text3.main'}}>
              13-minute read
            </Typography>
          </div>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <SvgIcon color="text3" style={{width:"24px", height:"17.5px"}}>
              <path d="M13.6666 18.3334H12V16.6667C12 16.0037 11.7366 15.3678 11.2677 14.8989C10.7989 14.4301 10.163 14.1667 9.49998 14.1667H4.49998C3.83694 14.1667 3.20105 14.4301 2.73221 14.8989C2.26337 15.3678 1.99998 16.0037 1.99998 16.6667V18.3334H0.333313V16.6667C0.333313 15.5616 0.7723 14.5018 1.5537 13.7204C2.3351 12.939 3.39491 12.5 4.49998 12.5H9.49998C10.605 12.5 11.6649 12.939 12.4463 13.7204C13.2277 14.5018 13.6666 15.5616 13.6666 16.6667V18.3334ZM6.99998 10.8334C6.34337 10.8334 5.69319 10.704 5.08656 10.4528C4.47993 10.2015 3.92874 9.8332 3.46445 9.36891C3.00015 8.90461 2.63186 8.35342 2.38058 7.74679C2.12931 7.14016 1.99998 6.48998 1.99998 5.83337C1.99998 5.17676 2.12931 4.52658 2.38058 3.91996C2.63186 3.31333 3.00015 2.76213 3.46445 2.29784C3.92874 1.83355 4.47993 1.46525 5.08656 1.21398C5.69319 0.962703 6.34337 0.833374 6.99998 0.833374C8.32606 0.833374 9.59783 1.36016 10.5355 2.29784C11.4732 3.23552 12 4.50729 12 5.83337C12 7.15946 11.4732 8.43123 10.5355 9.36891C9.59783 10.3066 8.32606 10.8334 6.99998 10.8334ZM6.99998 9.16671C7.88403 9.16671 8.73188 8.81552 9.357 8.1904C9.98212 7.56528 10.3333 6.71743 10.3333 5.83337C10.3333 4.94932 9.98212 4.10147 9.357 3.47635C8.73188 2.85123 7.88403 2.50004 6.99998 2.50004C6.11592 2.50004 5.26808 2.85123 4.64296 3.47635C4.01784 4.10147 3.66665 4.94932 3.66665 5.83337C3.66665 6.71743 4.01784 7.56528 4.64296 8.1904C5.26808 8.81552 6.11592 9.16671 6.99998 9.16671Z" />
            </SvgIcon>
            <Typography variant="caption3" sx={{color: 'text3.main'}}>
              1.9k reads
            </Typography>
          </div>
          </div>
        </CardContent>
        <CardActions>
         {children}
        </CardActions>
      </Card>
    </div>
  )
}

export default Typographies