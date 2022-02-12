import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header Test', () => {

    beforeEach(() => {
        render(
            <BrowserRouter>
                <Header/>
            </BrowserRouter>
        )
    })

    it('should render header', () => {
        
        expect(screen.getByText(/React-Bootstrap/i)).toBeInTheDocument()

        // screen.debug()

    })

    it('should have 3 links', () => {
        expect(screen.getAllByRole('link').length).toBe(3)
    })

    it('should have role headerTitle', () => {
        expect(screen.getByRole('headerTitle')).toBeInTheDocument
    })

})