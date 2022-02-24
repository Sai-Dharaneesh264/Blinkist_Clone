import React from 'react'
import { screen, render } from '@testing-library/react'
import ReadAgain from './ReadAgain'

import "@testing-library/jest-dom"

it('checks whether the component renders properly', () => {
    render(<ReadAgain label="reading" />)
})

it('checks the text in the component', () => {
    render(<ReadAgain label="reading" />)
    const element = screen.getByText('reading')
    expect(element).toBeInTheDocument()
})