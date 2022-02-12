import {screen, render} from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import {Post} from './Post'


const MockComponent = (props={}) => {
    return(
        <BrowserRouter>
            <Post {...props}/>
        </BrowserRouter>
    )
}

describe('Post element no props', () => {
    
    beforeEach(() => {
        render(MockComponent())
    })

    it('should not render if no props', () => {
        expect(screen.queryByRole('postComponent')).not.toBeInTheDocument()
    })
})

describe('Post element no props', () => {
    
    beforeEach(() => {
        const props = {
            post: {
                _id: 0,
                title: 'A new Post',
                description: 'A new description'
            }
        }
        render(MockComponent(props))
    })

    it('should  render if  props', () => {
        expect(screen.getByRole('postComponent')).toBeInTheDocument()
    })
    it('should render title and description', () => {
        expect(screen.getByRole('postTitleComponent')).toBeInTheDocument()
        expect(screen.getByRole('postDescriptionComponent')).toBeInTheDocument()
        
    })
    it('should render link component', () => {
        expect(screen.getByRole('linkComponent')).toBeInTheDocument()
        
        
    })
})