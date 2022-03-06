import React from 'react';
import { ThemeProvider } from '@mui/material/styles'
import customTheme from './Themes/customTheme'
import BookDetailPage from './components/pages/BookDetailPage/BookDetailPage'
import MyLibrary from './components/pages/MyLibrary/MyLibrary'
import LandingPage from './components/pages/LandingPage/LandingPage'
import { useAuth0 } from '@auth0/auth0-react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom'
import BookPage from './components/organisms/BookPage/BookPage'
import ButtonsRow from './components/molecules/ButtonsRow/ButtonsRow'
import BookDetails from './components/organisms/BookDetails/BookDetails';
const App = () => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  if (isLoading) {
    return (
      <div>Loading...</div>
    )
  }
  if (isAuthenticated) {
    return  (

          <ThemeProvider theme={customTheme}>
            {/* <requests /> */}
            <Router>
              <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/mylibrary' element={<MyLibrary />} />
                <Route path='/bookdetails/:id' element={<BookDetailPage />} />
              </Routes>
            </Router>
            {/* <BookPage />
            <ButtonsRow />
            <BookDetailPage />
            <BookDetails bookData={{id: '0', title: 'unknown', author: 'dont know', minutes: 'infinite'}}/> */}
          </ThemeProvider>
    )
  } else {
    return (
      <>
      {
        loginWithRedirect()
      }
      </>
    )
  }
};

export default App
