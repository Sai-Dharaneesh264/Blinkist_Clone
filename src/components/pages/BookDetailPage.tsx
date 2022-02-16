import React from 'react'
import Header from '../molecules/Header'
import BookPage from '../organisms/BookPage'
import TabsMenu from '../organisms/TabsMenu'
import Footer from '../organisms/Footer'

const BookDetailPage = () => {
  return (
    <div>
        <BookPage />
        <TabsMenu />
    </div>
  )
}

export default BookDetailPage