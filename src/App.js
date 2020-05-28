import React from "react"

import { Container, Row, Col, Button, Form } from "react-bootstrap"
import Works from "./components/Works"
import Header from "./components/Header"
import Footer from "./components/Footer"

import hero from "./assets/img/hero-img.png"
import Uber from "./assets/img/uber.png"
import c19 from "./assets/img/c19.png"
import respirators from "./assets/img/respirators.svg"
import gloves from "./assets/img/gloves.svg"
import shields from "./assets/img/shield.svg"
import sanitizers from "./assets/img/sanitizers.svg"
import ventilators from "./assets/img/ventilators.svg"
import masks from "./assets/img/masks.svg"
import wipes from "./assets/img/wipes.svg"
import gowns from "./assets/img/gowns.svg"

// import Header from "./components/Header"
// import Footer from "./components/Footer"

// import Navbar from "react-bootstrap/Navbar"
// import Nav from "react-bootstrap/Nav"
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Button from "react-bootstrap/Button"
// import Form from "react-bootstrap/Form"
// import FormControl from 'react-bootstrap/FormControl'

function App() {
  const equipments = [
    { icon: respirators, name: "Respirators" },
    { icon: gloves, name: "Glove" },
    { icon: shields, name: "Face Shields" },
    { icon: sanitizers, name: "Sanitizers" },
    { icon: ventilators, name: "Ventilators" },
    { icon: masks, name: "Masks" },
    { icon: wipes, name: "Wipes" },
    { icon: gowns, name: "Gowns" },
  ]

  const equipmentList = equipments.map((e) => (
    <div className="mx-1 mx-lg-5">
      <img height="60" className="mb-1" src={e.icon} alt={e.icon}></img>
      <p>{e.name}</p>
    </div>
  ))

  return (
    <div className="App">
      <Header></Header>
      <Container className="height-100 mt-5">
        <Row className="h-100 align-items-center">
          <Col md={6}>
            <h6 className="text-primary mb-4 font-weight-bold lp-1">
              LIFESAVING PROCUREMENT
            </h6>
            <h1 className="mb-5 font-weight-bold">Sourcing for COVID-19</h1>
            <h3 className="mb-4 font-weight-lighter text-paragraph">
              Response connects healthcare providers to medical suppliers with a
              sourcing platform built to accelerate emergency procurement.
            </h3>
            <Button
              href="/request"
              className="font-weight-bold mb-4 px-5 py-3"
              variant="red"
            >
              Request Medical Equipment
            </Button>
            <p>
              Questions? <span>Talk to us.</span>
            </p>
          </Col>
          <Col md={6}>
            <img className="img-fluid" src={hero}></img>
          </Col>
        </Row>
      </Container>

      <Container fluid className="text-white bg-primary py-3">
        <Row className="align-items-center justify-content-center">
          <h4 className="mb-0 mr-4 font-weight-light">Have Supplies?</h4>
          <Button
            href="/request"
            variant="outline-light px-4 py-3 font-weight-bold"
          >
            Supply Medical Equipment
          </Button>
        </Row>
      </Container>

      <Container fluid className="text-white py-5 bg-primary-light">
        <Row className="align-items-center justify-content-center">
          <h6 className="mb-0 mr-4 font-weight-bold text-paragraph lp-1">
            PARTNERS
          </h6>
          <img className="mr-3 filter" height="20" alt="" src={Uber} />
          <img className="mr-3 filter" height="20" alt="" src={c19} />
        </Row>
      </Container>

      <Container fluid className="py-6 bg-primary-light">
        <Row className="align-items-center justify-content-center">
          <Col className="text-center">
            <h1 className="mb-5 font-weight-bold">
              Millions of units in <br></br>medical equipment ready to go
            </h1>
            <h3 className="mb-4 font-weight-light text-paragraph">
              We're working with manufacturers producing <br></br>
              millions of high demand products per week.
            </h3>
            <div className="d-flex justify-content-center my-6 flex-wrap">
              {equipmentList}
            </div>
            <div className="d-inline-flex bg-paragraph-light px-4 py-3 text-primary rounded">
              <h5 className="mb-0 font-weight-bold">
                25+ More Classes of Goods Coming Soon
              </h5>
            </div>
          </Col>
        </Row>
      </Container>

      <Works></Works>

      <Container className="py-5 mb-6 bg-blue-bg rounded">
        <Col md={12}>
          <h6 className="text-primary mb-4 font-weight-bold lp-1">ABOUT US</h6>
          <h1 className="mb-4 font-weight-bold">
            We’re focused on accelerating the delivery of life saving medical
            supplies during COVID-19.
          </h1>
          <Button className="font-weight-bold px-0" variant="link">
            Learn more about our mission and who we are ->
          </Button>
        </Col>
      </Container>

      <Container fluid className="py-6 bg-primary-light">
        <Row className="align-items-center justify-content-center">
          <Col className="text-center">
            <h1 className="mb-5 font-weight-bold text-primary">Get Involved</h1>
            <h4 className="mb-0 font-weight-light text-paragraph">
              Join our community for the latest technical specifications,
              verified <br></br> suppliers data, and tools to help manage this
              global health pandemic.
            </h4>
            <Form inline className="my-5">
              <Row className="mx-auto">
                <Col md={12}>
                  <Form.Control
                    className="rounded-0 border-primary"
                    type="text"
                    size="lg"
                    placeholder="Your Email"
                  />
                  <Button size="lg" className="rounded-0">
                    Sign Up
                  </Button>
                </Col>
              </Row>
            </Form>
            <p className="text-paragraph">
              We care about protecting your data. Read our{" "}
              <a href="/">Privacy Policy</a>
            </p>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default App
