import { Container, Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Header = () => {
    return(
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/restaurants">Restaurants</Nav.Link>
                    <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}