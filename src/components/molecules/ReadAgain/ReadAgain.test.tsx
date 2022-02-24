import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import ReadAgain from './ReadAgain'


it('checks whether the component renders properly', () => {
    render(<ReadAgain label="reading" />)
})

it('checks the text in the component', () => {
    render(<ReadAgain label="reading" />)
    const element = screen.getByText('reading')
    expect(element).toBeInTheDocument()
})