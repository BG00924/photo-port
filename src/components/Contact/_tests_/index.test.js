import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';



afterEach(cleanup)

describe('Contact component', () => {
    // baseline test
    it('renders', () => {
        render(<Contact />)
    })
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Contact
        />)
        // assert value comparison
        expect(asFragment()).toMatchSnapshot()
    })

})

describe('Contact me is visible', () => {
    it('renders', () => {
        const { getByTestId } = render(<Contact />)
        //assert
        expect(getByTestId('ugh')).toHaveTextContent('Contact me')
        expect(getByTestId('ughButton')).toHaveTextContent('Submit')
    })
})