import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import BookCard from './BookCard'
import Buttons from '../../atoms/Buttons/Buttons'
import { AddIcon } from '../../Icons'
import ReadAgain from '../ReadAgain/ReadAgain'

const data = {
    id:"1",
    image: "/Images/1.png",
    title:"Bring Your Human to Work",
    author:"Erica Keswin",
    minutes:"13-minute read",
    reads:"",
    status:"reading",
    type:"Trending"
}
const allProps = {
    width: '100%',
    height: '52px',
    children: 'Add to library',
    startIcon: <AddIcon sx={{height: '24px', display: 'flex', position: 'relative', top: '5px'}} />
  }

test('test in bookcard', () => {
    render(<BookCard img={data} children={<Buttons variant='contained' {...allProps} color="secondary" />} />)
    const btnElement = screen.getByText('Add to library')
    expect(btnElement).toBeInTheDocument()
})

test('on click test on add to library', () => {
    render(<BookCard img={data} children={<Buttons variant='contained' {...allProps} color="secondary" />} />)
    const btnElement = screen.getByRole('button')
    fireEvent.click(btnElement)
})

test('read again bookcard test', () => {
    render(<BookCard img={data} children={<ReadAgain label='reading' />} />)
    const btnElement = screen.getByText('reading')
    expect(btnElement).toBeInTheDocument();
})