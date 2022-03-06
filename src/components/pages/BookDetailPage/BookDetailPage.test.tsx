import React from 'react'
import { render } from '@testing-library/react'
import BookDetailPage from './BookDetailPage'

import { Provider } from 'react-redux'
import { store } from '../../../store/store'

it('checks whether the component renders properly', () => {
    render(<Provider store={store}><BookDetailPage /></Provider>)
})