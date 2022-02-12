import { Container, Nav, Navbar } from "react-bootstrap"
import {Link} from 'react-router-dom'

export const Header = () => {
    return(
        <Navbar bg="light" expand="lg" role='headerComponent'>
            <Container>
                <Navbar.Brand role='headerTitle'>React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/" className='homeLink'>Home</Nav.Link>
                    <Nav.Link as={Link} to="/posts" className='postsLink'>Posts</Nav.Link>
                    <Nav.Link as={Link} to="/create" className='createLink'>Create</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}