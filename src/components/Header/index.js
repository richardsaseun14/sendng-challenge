import React from "react"

import { Navbar, Nav, Button, Form } from "react-bootstrap"
import logo from "../../assets/img/logo.svg"
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";

const Header = () => {
  return (
    <div>
      <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              height="20"
              className="d-inline-block align-top"
              alt="TryResponse logo"
            />
          </Navbar.Brand>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link className="px-4" href="#home">
              Group Purchasing
            </Nav.Link>
            <Nav.Link className="px-4" href="#link">
              About
            </Nav.Link>
            <Nav.Link className="px-4" href="#link">
              Contact Us
            </Nav.Link>
          </Nav>
          <Form inline>
            <Button className="ml-2" variant="link">
              Login
            </Button>
            <Button className="ml-2" variant="primary">
              Request
            </Button>
            <Button className="ml-2" variant="red">
              Supply
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
