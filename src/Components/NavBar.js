import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function NavBar() {
    return (
      <>
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
                
                <Nav.Link href="" style={{color:"black"}}><b><i className="fa fa-fw fa-home"></i>Home</b></Nav.Link>
                <Nav.Link href="" style={{color:"black"}}><b>About Us</b></Nav.Link>
                <Nav.Link href="" style={{color:"black"}}><b>Contact</b></Nav.Link>
              </Nav>

              <Nav>
                <Nav.Link href="" style={{color:"black"}}><b>Login</b></Nav.Link>
                <Nav.Link href="" style={{color:"black"}}><b>Registration</b></Nav.Link>
                <Nav.Link href="" style={{color:"black"}}><b>Book Appoinment</b></Nav.Link>
              </Nav>
            </Navbar.Collapse>

            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            
          </Container>
        </Navbar>


          <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
          <div className="col">
              <div className="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
              </div>
            </div>
          </div>

            </>
      );
}
