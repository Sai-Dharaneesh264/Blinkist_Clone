import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import Lists from './Lists';


it('checks whether the component render', () => {
    render(<Lists />)
})

it('checks the text in the lists', () => {
    render(<Lists />)
    const element = screen.getByText('Editorial')
    expect(element).toBeInTheDocument()
})