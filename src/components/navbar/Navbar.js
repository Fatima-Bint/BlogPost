import React from 'react'
//import * as ReactBootstrap from "react-bootstrap";
//import {Browserrouter as Link} from 'react-router-dom';
import {  Link  } from 'react-router-dom';
import { Nav, Container } from 'react-bootstrap';

function Navbar (){

  return(
    /*
    <div>
      <ReactBootstrap.Navbar
        collapseOnSelect
        expand="xl"
        bg="danger"
        variant="dark"
        activekey='/'
        fixed="top"
      >
        <ReactBootstrap.Navbar.Brand href="#name">
          FASHDOM
        </ReactBootstrap.Navbar.Brand>
        <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootstrap.Nav className="mr-auto">

            <ReactBootstrap.Nav.Link href='/'>
              Home
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.Nav.Link href="/blog">
              Blog
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.NavDropdown
              title="Our Products"
              id="collasible-nav-dropdown"
            >
              <ReactBootstrap.NavDropdown.Item href="#action/3.1">
                Cosmetics
              </ReactBootstrap.NavDropdown.Item>

              <ReactBootstrap.NavDropdown.Item href="#action/3.2">
                Clothing
              </ReactBootstrap.NavDropdown.Item>

              <ReactBootstrap.NavDropdown.Item href="#action/3.3">
                Shoes
              </ReactBootstrap.NavDropdown.Item>
            </ReactBootstrap.NavDropdown>
          </ReactBootstrap.Nav>

          <ReactBootstrap.Nav>
            <ReactBootstrap.Nav.Link href="#deets">
            </ReactBootstrap.Nav.Link>

            <ReactBootstrap.Nav.Link eventKey={2} href="/Login">
              Login
            </ReactBootstrap.Nav.Link>
          </ReactBootstrap.Nav>
        </ReactBootstrap.Navbar.Collapse>
      </ReactBootstrap.Navbar>
      
    </div>
*/

<div>
               <Navbar collapseOnSelect expand="lg" bg="blue" >
                   <Container>
   
                       <Link to="/"><Navbar.Brand>Sacx</Navbar.Brand></Link>
                       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                       <Navbar.Collapse id="responsive-navbar-nav">
                           <Nav className="mr-auto">
                               <Nav.Link as={Link} to="/">Home</Nav.Link>
                               <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                               </Nav>
                               
                           <Nav>
                               <Nav.Link as={Link} to="signin">Sign In</Nav.Link>
                               <Nav.Link as={Link} to="join">Sign Up</Nav.Link>
                           </Nav>
                       </Navbar.Collapse>
                   </Container>
   
               </Navbar>
           </div>


  )
}

export default Navbar;