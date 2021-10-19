import {Nav, Navbar, Container} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="/">MERN Post App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/posts">Post</Nav.Link>
                <Nav.Link as={Link} to="/create">Create</Nav.Link>
                
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    )
}