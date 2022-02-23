import React from 'react'
import Banner from '../../organisms/Banner/Banner'
import SearchComponent from '../../molecules/SearchComponent/SearchComponent'
import BooksGroup from '../../organisms/BooksGroup/BooksGroup'
import Template from '../../template/Template'

const LandingPage = () => {
  return (
    <Template>
        <Banner />
        <SearchComponent />
        <BooksGroup title="Trending Blinks" />
    </Template>
  )
}

export default LandingPage