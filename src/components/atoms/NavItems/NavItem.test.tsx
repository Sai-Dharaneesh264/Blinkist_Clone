import React from 'react'
import { screen, render } from '@testing-library/react'
import NavItem from './NavItem'
import { Icon1 } from '../../Icons'

import "@testing-library/jest-dom"

test('to check whether the text renders', () => {
    render(<NavItem children="click me" />)
    const data = screen.getByText('click me');
    expect(data).toBeInTheDocument();
})

test('check whether text renders with start icon', () => {
    render(<NavItem children="click" startIcon={<Icon1 />} />)
    const icon = screen.getByTestId('startIcon')
    expect(icon).toBeInTheDocument();
})

test('check whether text renders with end icon', () => {
    render(<NavItem children="click" endIcon={<Icon1 />} />)
    const icon = screen.getByTestId('startIcon')
    expect(icon).toBeInTheDocument();
})