import React from 'react'

import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Icon1 } from '../../Icons'

import Buttons from './Buttons'

test('checking whether text is rendered or not', () => {
    render(<Buttons children="chandu" />)
    const labelElement = screen.getByText('chandu')
    expect(labelElement).toBeInTheDocument();
    const buttonElement = screen.getByRole('button')
    fireEvent.click(buttonElement)
})
