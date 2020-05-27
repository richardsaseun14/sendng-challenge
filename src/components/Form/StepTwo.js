import React from "react"
import { Navbar, Nav, Button, Card, Container, Row, Col } from "react-bootstrap"

class Step2 extends React.Component {
  render() {
    if (this.props.currentStep !== 2) {
      // Prop: The current step
      return null
    }

    return (
      <Container fluid className="bg-primary-light height-100">
        <Container className="pt-8">
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="">
                <Card.Header className="font-weight-bold py-5 bg-white">
                  <h4 className="font-weight-bold">
                    What products do you offer?
                  </h4>
                  <p className="font-weight-light mb-0">
                    Select all that applies
                  </p>
                </Card.Header>
                <Card.Body>
                  <Row className="justify-content-center">
                    <Col
                      md={5}
                      className="border border-paragraph-light rounded btn-product d-flex align-items-center"
                    >
                      <p className="m-0 font-weight-bold">
                        Respirators{"   "}
                        <span className="ml-2 text-paragraph font-weight-light">
                          Surgical N95 or equivalent
                        </span>
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

const products = [{ name: "Respirators", sub: "Surgical N95" }]

export default Step2
