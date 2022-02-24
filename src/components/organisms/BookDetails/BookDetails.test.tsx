import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import BookDetails from './BookDetails'
import { StateProps } from '../../assets/Types'

const data = {
    // id: "1",
    // image: "/Images/1.png",
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    minutes: "13-minute read",
    // reads: "",
    // status: "reading",
    // type: "Trending"
}

it('checks whether the component renders properly', () => {
    render(<BookDetails bookData={data}/>)
})