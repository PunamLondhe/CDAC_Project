import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg='primary'>
          <Container>

          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto fs-10">

               

                <NavDropdown title="Clinic List" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="">Clinic 1</NavDropdown.Item>
                  <NavDropdown.Item href="">Clinic 2</NavDropdown.Item>
                  <NavDropdown.Item href="">Clinic 3</NavDropdown.Item>
                  <NavDropdown.Divider />

                  {/* <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item> */}

                </NavDropdown>
                
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="">About Us</Nav.Link>
                <Nav.Link href="">Contact</Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="">Login</Nav.Link>
                <Nav.Link href="">Registration</Nav.Link>
                <Nav.Link href="">Book Appoyment</Nav.Link>
              </Nav>
            </Navbar.Collapse>

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
          </Container>
        </Navbar>

       
      );
}
