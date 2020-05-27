import React from "react"
import { Container, Row, Col, Button, Nav, Navbar } from "react-bootstrap"
import logo from "../../assets/img/logo.svg"

const Footer = () => {
  return (
    <Container className="py-7">
      <Row noGutters>
        <Col md={4} className="d-flex flex-column justify-content-between">
          <div>
            <img className="mb-4 mb-md-0" height="30" src={logo}></img>
          </div>
          <p className="text-muted">© 2020 Response Inc.</p>
        </Col>
        <Col xs={6} md={2}>
          <Nav className="flex-column">
            <Navbar.Text className="mb-2">Product</Navbar.Text>
            <Nav.Link className="pl-0 pb-0" eventKey="link-1">
              Features
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={6} md={2}>
          <Nav className="flex-column">
            <Navbar.Text className="mb-2">Legal</Navbar.Text>
            <Nav.Link className="pl-0 pb-0" eventKey="link-1">
              Terms
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              Privacy
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={6} md={2} className="mt-5 mt-md-0">
          <Nav className="flex-column">
            <Navbar.Text className="mb-2">Company</Navbar.Text>
            <Nav.Link className="pl-0 pb-0" eventKey="link-1">
              About
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              Contact Us
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              +1 (844) 966-1910
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={6} md={2} className="mt-5 mt-md-0">
          <Nav className="flex-column">
            <Navbar.Text className="mb-2">Follow Us</Navbar.Text>
            <Nav.Link className="pl-0 pb-0" eventKey="link-1">
              Linkedin
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              Facebook
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              Twitter
            </Nav.Link>
            <Nav.Link className="pl-0 pb-0" eventKey="link-2">
              Instagram
            </Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
