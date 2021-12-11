import {Container, Nav, Navbar} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { userSliceActions } from '../store/UserStore'
import {FaShoppingCart} from 'react-icons/fa'

export const Header = () => {
    
    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const user = useSelector(state => state.user.user)

    const logoutHandler = () => {
        dispatch(userSliceActions.userLogout())
    }
    
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">{user.username || 'React'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/courses">Courses</Nav.Link>
                    <Nav.Link as={Link} to="/courseCreate">Create Course</Nav.Link>
                    <Nav.Link as={Link} to="/createLesson">Create Lesson</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    <Nav.Link as={Link} to="/carts">Carts</Nav.Link>
                    <Nav.Link onClick={logoutHandler}>Logout</Nav.Link>
                    
                    <Nav.Link as={Link} to="/cart"><span className='text-info'><FaShoppingCart/> {cart.cartQuantity}</span> <span className='text-danger'>{cart.cartTotal}</span></Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}