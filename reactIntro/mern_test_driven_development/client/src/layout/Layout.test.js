import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {Layout} from './Layout'


const MockComponent = (props={}) => {
    return(
        <BrowserRouter>
            <Layout {...props}/>
        </BrowserRouter>
    )
}

describe('Layout with Props', () => {
    
    beforeEach(() => {
        const props = {
            children: 'Child Prop'
        }

        render(MockComponent(props))
    })

    it('should render with header', () => {
        expect(screen.getByRole('headerTitle')).toBeInTheDocument()
    })

    it('should have a container role and container class', () => {
        expect(screen.getByRole('container')).toBeInTheDocument()
        expect(screen.getByRole('container').classList.contains('container')).toEqual(true)
    })
    it('should render children', () => {
        expect(screen.getByText(/child prop/i)).toBeInTheDocument()
        screen.debug()
    })
})

describe('Layout without Props', () => {
    beforeEach(() => {
        render(MockComponent())
    })
    it('should render without header', () => {
        expect(screen.queryByRole('headerTitle')).not.toBeInTheDocument()
    })
})