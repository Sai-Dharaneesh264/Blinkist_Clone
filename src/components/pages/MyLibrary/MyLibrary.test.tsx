import React from 'react'
import { render } from '@testing-library/react'
import MyLibrary from './MyLibrary'

import { Provider } from 'react-redux'
import { store } from '../../../store/store'

import "@testing-library/jest-dom"

it('checks whether the component renders properly', () => {
    render(<Provider store={store}><MyLibrary /></Provider>)

})