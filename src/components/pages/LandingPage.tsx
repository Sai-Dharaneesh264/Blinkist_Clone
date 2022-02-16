import React from 'react'
import Header from '../molecules/Header'
import Banner from '../molecules/Banner'
import SearchComponent from '../molecules/SearchComponent'
import BooksGroup from '../organisms/BooksGroup'
import Footer from '../organisms/Footer'

const LandingPage = () => {
  return (
    <div>
        <Banner />
        <SearchComponent />
        <BooksGroup />
        <BooksGroup />
    </div>
  )
}

export default LandingPage