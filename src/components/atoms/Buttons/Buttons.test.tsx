import React from 'react'

import "@testing-library/jest-dom"
import { render, fireEvent, screen } from '@testing-library/react'

import Buttons from './Buttons'

test('checking whether text is rendered or not', () => {
    render(<Buttons children="chandu" />)
    const labelElement = screen.getByText('chandu')
    expect(labelElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
})
