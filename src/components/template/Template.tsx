import React from 'react'
import Header from '../molecules/Header'
import Footer from '../organisms/Footer'


interface Props {
    children: React.ReactNode;
}
const Template = ({ children }: Props) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default Template