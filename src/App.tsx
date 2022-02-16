import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import customTheme from './Themes/theme'

import BookDetailPage from './components/pages/BookDetailPage'
import MyLibrary from './components/pages/MyLibrary'
import LandingPage from './components/pages/LandingPage'
import Footer from './components/organisms/Footer'
import DropDown from './components/molecules/DropDown'
import Header from './components/molecules/Header'
import BookCard from './components/organisms/BookCard'
import Typographies from './components/atoms/Typographies'

import ExtendedNav from './components/atoms/ExtendedNav'
import Menus from './components/atoms/Menus'
import Lists from './components/Lists'
import BookGrid from './components/organisms/BookGrid'
import Template from './components/template/Template'
import BookDetailsPage from './components/pages/BookDetailPage'
import Banner  from './components/molecules/Banner';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
// import { Switch } from 'react-router'
const App = () => {
  return (
    // <Banner />
    <ThemeProvider theme={customTheme}>
   <Router>
     <Routes>
       <Route path='/' element={<Template children={<LandingPage />} />} />
       <Route path='/mylibrary' element={<Template children={<MyLibrary />} />} />
       <Route path='/bookdetails' element={<Template children={<BookDetailPage />} />} />
     </Routes>
   </Router>
   </ThemeProvider>
  )
};

export default App
