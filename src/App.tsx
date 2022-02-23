import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import customTheme from './Themes/customTheme'
import BookDetailPage from './components/pages/BookDetailPage/BookDetailPage'
import MyLibrary from './components/pages/MyLibrary/MyLibrary'
import LandingPage from './components/pages/LandingPage/LandingPage'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'

const App = () => {
  return (
    // <Banner />
    <ThemeProvider theme={customTheme}>
   <Router>
     <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route path='/mylibrary' element={<MyLibrary />} />
       <Route path='/bookdetails/:id' element={<BookDetailPage />} />
     </Routes>
   </Router>
   </ThemeProvider>
  )
};

export default App
