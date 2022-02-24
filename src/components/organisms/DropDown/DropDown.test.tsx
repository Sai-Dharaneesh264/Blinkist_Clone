import React from 'react'
import { render } from '@testing-library/react'
import DropDown from './DropDown'

const handleClose = () => {
    
}
it('checks whether component renders properly', () => {
    render(<DropDown handleClose={handleClose} anchorEl={null} />)

})

// it('checks whether component renders properly', () => {
//     render(<DropDown handleClose={handleClose} anchorEl={null} />)
//     const element = screen.getByText('Entrepreneurship')
//     expect(element).toBeInTheDocument()
// })