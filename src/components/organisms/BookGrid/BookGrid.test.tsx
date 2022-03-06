import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import BookGrid from './BookGrid'
import Buttons from '../../atoms/Buttons/Buttons'
import { Provider } from 'react-redux'
import { store } from '../../../store/store'

import "@testing-library/jest-dom"



test('checks whether component renders', () => {
    render(<Provider store={store}><BookGrid children={<Buttons children="click me" />} /> </Provider>)
    const grid = screen.getByTestId('grid_container')
    expect(grid).toBeInTheDocument();
})






