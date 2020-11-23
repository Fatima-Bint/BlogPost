import React from 'react'
import * as ReactBootstrap from "react-bootstrap";
import {Browserrouter as Link} from 'react-router-dom';

function Navbar (){

  return(
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


  )
}

export default Navbar;