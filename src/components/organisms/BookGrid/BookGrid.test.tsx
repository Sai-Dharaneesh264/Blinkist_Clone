import React from 'react'
import { screen, render, fireEvent, waitForElementToBeRemoved } from '@testing-library/react'
import BookGrid from './BookGrid'
import Buttons from '../../atoms/Buttons/Buttons'
import axiosMock from 'axios';
import { DefaultRequestBody, rest } from 'msw'
import { setupServer } from 'msw/node'
import { stateProps } from '../../assets/Types'


// afterEach(() => server.resetHandlers())

const allProps = {
    children: <Buttons children="Add to library" />,
}

test('testing grid', () => {
    render(<BookGrid {...allProps} />)
    const buttonElement = screen.getByText('Add to Library')
    expect(buttonElement).toBeInTheDocument();
})