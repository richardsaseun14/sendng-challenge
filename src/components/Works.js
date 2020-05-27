import React, { Component } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

import stepOne from "../assets/img/step-one.svg"
import stepTwo from "../assets/img/step-two.svg"
import stepThree from "../assets/img/step-three.svg"
import stepFour from "../assets/img/step-four.svg"

const Works = () => {
  return (
    <Container className="py-6">
      <div className="text-center">
        <h2 className="font-weight-bold text-primary mb-7">How it Works</h2>
      </div>
      <Row className="mb-10 align-items-center">
        <Col md={6}>
          <h6 className="text-primary mb-4 font-weight-bold lp-1">STEP ONE</h6>
          <h1 className="mb-5 font-weight-bold">
            Post compliant requests <br></br> in minutes
          </h1>
          <h4 className="mb-4 font-weight-light text-paragraph">
            Tell us what you need and Response uses your terms to generate all
            the necessary paperwork.
          </h4>
        </Col>
        <Col className="" md={6}>
          <img className="img-fluid mt-3 mt-md-0" src={stepOne}></img>
        </Col>
      </Row>

      <Row className="mb-10 align-items-center">
        <Col md={6}>
          <h6 className="text-primary mb-4 font-weight-bold lp-1">STEP TWO</h6>
          <h1 className="mb-5 font-weight-bold">
            Match with suppliers you <br></br> can trust
          </h1>
          <h4 className="mb-4 font-weight-light text-paragraph">
            Response instantly notifies the most relevant suppliers based on
            your request.
          </h4>
        </Col>
        <Col className="" md={6}>
          <img className="img-fluid  mt-3 mt-md-0" src={stepTwo}></img>
        </Col>
      </Row>

      <Row className="mb-10 align-items-center">
        <Col md={6}>
          <h6 className="text-primary mb-4 font-weight-bold lp-1">
            STEP THREE
          </h6>
          <h1 className="mb-5 font-weight-bold">Pick the best offer</h1>
          <h4 className="mb-4 font-weight-light text-paragraph">
            We automatically collect and score the best offers based on quality,
            lead time, and price.
          </h4>
        </Col>
        <Col className="" md={6}>
          <img className="img-fluid  mt-3 mt-md-0" src={stepThree}></img>
        </Col>
      </Row>

      <Row className="mb-6 align-items-center">
        <Col md={6}>
          <h6 className="text-primary mb-4 font-weight-bold lp-1">STEP FOUR</h6>
          <h1 className="mb-5 font-weight-bold">Get your supplies</h1>
          <h4 className="mb-4 font-weight-light text-paragraph">
            Response is designed to make emergency procurement easy and fast, so
            that you can get back to the work that really matters - fighting
            COVID-19.
          </h4>
        </Col>
        <Col className="" md={6}>
          <img className="img-fluid  mt-3 mt-md-0" src={stepFour}></img>
        </Col>
      </Row>

      <div className="text-center">
        <Button className="font-weight-bold mb-4 px-5 py-3" variant="red">
          Request Medical Equipment
        </Button>
      </div>
    </Container>
  )
}

export default Works
