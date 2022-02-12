import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer, { postSliceActions } from './store/PostStore'
import alertReducer, { alertSliceActions } from './store/AlertStore'

// How to capture elements in the Document Object Model
// GetBy
// Used when we expect something to be in the document
// Will throw an error and the test will error if not found


// QueryBy
// Used when we may or may not know if the element is in the document
// Will NOT throw an error and tests will continue on

// FindBy
// Used with Async / Await calls when we know we have to wait for a state change
// Will throw an error and tests will error if not found


export const store = configureStore({
    reducer: {
        alert: alertReducer,
        post: postReducer
    }
})

const MockComponent = () => {
  return(

        <App/>

  )
}


const renderWithRouter = (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return render(ui, {wrapper: BrowserRouter})
}

describe('App Test', () => {

  it('should render layout and header components', () => {
    renderWithRouter(MockComponent())
    expect(screen.getByRole('layoutComponent')).toBeInTheDocument()
    expect(screen.getByRole('headerComponent')).toBeInTheDocument()
  })

  it('should render home route', () => {
    renderWithRouter(MockComponent(), {route:'/'})
    expect(screen.getByRole('homeComponent')).toBeInTheDocument()
  })
  it('should render posts route', () => {
    renderWithRouter(MockComponent(), {route:'/posts'})
    expect(screen.getByRole('postsComponent')).toBeInTheDocument()
  })
  it('should render create route', () => {
    renderWithRouter(MockComponent(), {route:'/create'})
    expect(screen.getByRole('postCreateComponent')).toBeInTheDocument()
  })
  it('should render detail route', () => {
    renderWithRouter(MockComponent(), {route:'/12345'})
    expect(screen.getByRole('postDetailComponent')).toBeInTheDocument()
  })
})







// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
