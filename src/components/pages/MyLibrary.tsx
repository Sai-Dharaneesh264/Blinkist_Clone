import React from 'react'
import Header from '../molecules/Header'
import { Typography } from '@mui/material'
import BookGrid from '../organisms/BookGrid'
import TabsBar from '../organisms/TabsBar'
import Footer from '../organisms/Footer'
import Buttons from '../atoms/Buttons'
import ReadAgain from './ReadAgain'
const MyLibrary = () => {
  return (
    <div>
        <div style={{display: 'flex', justifyContent: 'center', marginTop: '90px', marginBottom: '60px'}}>
        <Typography variant="h1" sx={{display: 'flex', justifyContent: 'flex-start', width: '912px'}}>
            My Library
        </Typography>
        </div>
        <TabsBar />
       
    </div>
  )
}

export default MyLibrary