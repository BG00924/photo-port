import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '..'

afterEach(cleanup)

//mock onclick
const mockToggleModal = jest.fn();

//mock prop
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
  };

describe('Modal component', () => {
    it('renders', () => {
        //baseline render component test
        render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
    })

    //snapshot test
    it('matchs snapshot', () => {
        const { asFragment } = render(<Modal currentPhoto={currentPhoto} onClose={mockToggleModal} />)
        expect(asFragment()).toMatchSnapshot()
    })
})

describe('Click Event', () => {
    it('calls onClose handler', () => {
        // arrange: render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />)
        //simulate click event
        fireEvent.click(getByText('Close this modal'))
        //assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1)
    })
})