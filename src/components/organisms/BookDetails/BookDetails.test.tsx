import React from 'react'
import { render } from '@testing-library/react'
import BookDetails from './BookDetails'

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