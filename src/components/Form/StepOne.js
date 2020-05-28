import React from "react"
import { Navbar, Nav, Button, Form, Container, Row, Col } from "react-bootstrap"

class Step1 extends React.Component {
  render() {
    if (this.props.currentStep !== 1) {
      // Prop: The current step
      return null
    }
    // The markup for the Step 1 UI
    return (
      <Container fluid className="bg-primary-light">
        <Container className="py-8">
          <div className="text-center">
            <h4 className="mb-4 font-weight-bold">Welcome!</h4>
            <h4 className="mb-3">Here are the next steps:</h4>
          </div>
          <Row className="justify-content-center mb-5">
            <Col md={4} className="my-card py-5 px-5 text-center bg-white m-3">
              <h5 className="my-3 font-weight-bold">Sign up</h5>
              <p>
                Create an account and complete your request in less than 3
                minutes.
              </p>
            </Col>
            <Col md={4} className="my-card py-5 px-5 text-center bg-white m-3">
              <h5 className="my-3 font-weight-bold">Match with suppliers</h5>
              <p>
                After completing your request, we’ll notify relevant suppliers
                to start bidding.
              </p>
            </Col>
          </Row>
          <div className="text-center">
            <Button
              onClick={this.props.handleNext}
              className="font-weight-bold"
              variant="primary px-7"
            >
              Start
            </Button>
          </div>
        </Container>
      </Container>
      // <div className="form-group">
      //   <label htmlFor="email">Email address</label>
      //   <input
      //     className="form-control"
      //     id="email"
      //     name="email"
      //     type="text"
      //     placeholder="Enter email"
      //     value={this.props.email} // Prop: The email input data
      //     onChange={this.props.handleChange} // Prop: Puts data into state
      //   />
      // </div>
    )
  }
}

export default Step1
