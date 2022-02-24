import React from 'react'
import { render } from '@testing-library/react'
import BookDetailPage from './BookDetailPage'


it('checks whether the component renders properly', () => {
    render(<BookDetailPage />)
})