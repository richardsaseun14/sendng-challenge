import React, { useState } from "react"

import {
  Navbar,
  Nav,
  Button,
  Card,
  Container,
  Row,
  Col,
  ToggleButton,
  ToggleButtonGroup,
} from "react-bootstrap"

function Step2(props) {
  const [select, setSelect] = useState([])
  const [disabled, setDisabled] = useState([true])

  const handleChange = (value) => {
    setSelect(value)
    props.handleChange(value)
    // if (value.length >= 1) {
    //   setDisabled(false)
    // }
    // if ((value.length = 0)) {
    //   setDisabled(true)
    // }
  }

  let btnClasses = [
    "btn-custom",
    "py-3",
    "text-left",
    "mb-3",
    "col-5",
    "mx-2",
    "rounded",
  ]

  const productList = props.products.map((p) => (
    <ToggleButton key={p.id} variant="light" className={btnClasses} value={p}>
      <p className="m-0 font-weight-bold">
        {p.name}

        <span className="ml-2 text-paragraph font-weight-light">{p.sub}</span>
      </p>
    </ToggleButton>
  ))

  if (props.currentStep !== 2) {
    // Prop: The current step
    return null
  }

  return (
    <Container fluid className="bg-primary-light">
      <Container className="pt-8">
        <Row className="justify-content-center">
          <Col md="10">
            <Card className="my-card">
              <Card.Header className="font-weight-bold py-5 bg-white">
                <h4 className="font-weight-bold">
                  What products do you offer?
                </h4>
                <p className="font-weight-light mb-0">
                  Select all that applies
                </p>
              </Card.Header>
              <Card.Body>
                {/* <Row className="justify-content-center"> */}
                {/* {productList} */}
                <ToggleButtonGroup
                  type="checkbox"
                  value={select}
                  onChange={handleChange}
                  className="my-2 row justify-content-center"
                >
                  {productList}
                </ToggleButtonGroup>
                {/* </Row> */}
              </Card.Body>
            </Card>
            <Button
              variant="primary"
              disabled={select.length === 0 ? true : false}
              onClick={props.handleNext}
              className="font-weight-bold py-3 px-4 my-4 float-right"
            >
              Continue
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Step2
