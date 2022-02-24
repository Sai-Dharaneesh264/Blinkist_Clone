import React from 'react'
import { screen, render } from '@testing-library/react'
import Lists from './Lists';

import "@testing-library/jest-dom"

it('checks whether the component render', () => {
    render(<Lists />)
})

it('checks the text in the lists', () => {
    render(<Lists />)
    const element = screen.getByText('Editorial')
    expect(element).toBeInTheDocument()
})