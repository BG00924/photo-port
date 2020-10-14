import React from 'react'
// retrieves functions from the react testing libraray
import { render, cleanup } from '@testing-library/react'
//imports extend-expect from jest-dom
import '@testing-library/jest-dom/extend-expect'
// imports component we're testin
import About from '..'

// jest global function to cleanup; ensures no leftover memory data
afterEach(cleanup)

//declares component we're testing
describe('About component', () => {
    //renders About test
    //first test; verifies component is rendering
    it('renders', () => {
        render(<About />)
    })

    //second test; compares snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        // render About; returns snapshot of about component
        const { asFragment } = render(<About />)
        //test and compare whether the expected and actual outcomes match
        expect(asFragment()).toMatchSnapshot()
    })

})
