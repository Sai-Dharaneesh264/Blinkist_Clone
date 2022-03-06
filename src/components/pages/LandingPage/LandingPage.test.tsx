import React from 'react'
import { render } from '@testing-library/react'
import LandingPage from './LandingPage'

import { Provider } from 'react-redux'
import { store } from '../../../store/store'


it('checks whether the component renders properly', () => {
    render(<Provider store={store}><LandingPage /></Provider>)
})