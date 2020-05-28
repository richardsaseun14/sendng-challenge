import React from "react"
import { Button, Card, Container, Row, Col, Form } from "react-bootstrap"

const StepThree = (props) => {
  if (props.currentStep !== 3) {
    // Prop: The current step
    return null
  }
  return (
    <div>
      <Container fluid className="bg-primary-light">
        <Container className="pt-8">
          <Row className="justify-content-center">
            <Col md="10">
              <Card className="my-card">
                <Card.Header className="px-5 font-weight-bold py-5 bg-white">
                  <h4 className="font-weight-bold">Contact Information</h4>
                </Card.Header>
                <Card.Body className="px-5 ">
                  <Form className="my-5">
                    <h5 className="font-weight-bold mb-3">Primary Contact</h5>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>First Name</small>
                      </Form.Label>
                      <Form.Control
                        name="firstName"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="First Name"
                        onChange={props.handleChange}
                        value={props.firstName}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupPassword">
                      <Form.Label>
                        <small>Last Name</small>
                      </Form.Label>
                      <Form.Control
                        name="lastName"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Last Name"
                        onChange={props.handleChange}
                        value={props.lastName}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupPassword">
                      <Form.Label>
                        <small>Title</small>
                      </Form.Label>
                      <Form.Control
                        name="title"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Title"
                        onChange={props.handleChange}
                        value={props.title}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupPassword">
                      <Form.Label>
                        <small>Email Address</small>
                      </Form.Label>
                      <Form.Control
                        name="email"
                        className="border-paragraph-light"
                        type="email"
                        placeholder="Email"
                        onChange={props.handleChange}
                        value={props.email}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupPassword">
                      <Form.Label>
                        <small>Phone Number</small>
                      </Form.Label>
                      <Form.Control
                        name="phoneNumber"
                        className="border-paragraph-light"
                        type="tel"
                        placeholder="Phone Number"
                        onChange={props.handleChange}
                        value={props.phoneNumber}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupPassword">
                      <Form.Label>
                        <h5 className="font-weight-bold my-3">
                          Proof of association with organization
                        </h5>
                      </Form.Label>
                      <Form.Control
                        name="linkUrl"
                        className="border-paragraph-light"
                        type="url"
                        placeholder="Requester Profile (LinkedIn, organization page, etc."
                        onChange={props.handleChange}
                        value={props.linkUrl}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>

              <Card className="my-card my-5">
                <Card.Header className="px-5 font-weight-bold py-5 bg-white">
                  <h4 className="font-weight-bold">
                    Your Organization Information
                  </h4>
                </Card.Header>
                <Card.Body className="px-5 ">
                  <Form className="my-5">
                    <h5 className="font-weight-bold mb-3">Organization</h5>
                    <Form.Group className="w-50" controlId="theSelect">
                      <Form.Label>
                        <small>Organization Type</small>
                      </Form.Label>
                      <Form.Control
                        name="orgType"
                        value={props.orgType}
                        as="select"
                        onChange={props.handleChange}
                      >
                        <option value="" disabled>
                          Organization Type
                        </option>
                        <option value="Supplier">Supplier</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Individual">Individual</option>
                      </Form.Control>
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>Organization name</small>
                      </Form.Label>
                      <Form.Control
                        name="orgName"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Organization name"
                        onChange={props.handleChange}
                        value={props.orgName}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>Organization website</small>
                      </Form.Label>
                      <Form.Control
                        name="orgWebsite"
                        className="border-paragraph-light"
                        type="url"
                        placeholder="Organization website"
                        onChange={props.handleChange}
                        value={props.orgWebsite}
                      />
                    </Form.Group>
                    <h5 className="font-weight-bold my-3">Location</h5>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>Address Line 1</small>
                      </Form.Label>
                      <Form.Control
                        name="location1"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Street address, P.O. box, company name, c/o"
                        onChange={props.handleChange}
                        value={props.location1}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>Address Line 2</small>
                      </Form.Label>
                      <Form.Control
                        name="location2"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Apartment, suite, unit, building, floor, etc."
                        onChange={props.handleChange}
                        value={props.location2}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>City</small>
                      </Form.Label>
                      <Form.Control
                        name="city"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="City"
                        onChange={props.handleChange}
                        value={props.city}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>State/Province/Region</small>
                      </Form.Label>
                      <Form.Control
                        name="state"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="State/Province/Region"
                        onChange={props.handleChange}
                        value={props.state}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>ZIP</small>
                      </Form.Label>
                      <Form.Control
                        name="zip"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="ZIP"
                        onChange={props.handleChange}
                        value={props.zip}
                      />
                    </Form.Group>
                    <Form.Group className="w-50" controlId="formGroupEmail">
                      <Form.Label>
                        <small>Country</small>
                      </Form.Label>
                      <Form.Control
                        name="country"
                        className="border-paragraph-light"
                        type="text"
                        placeholder="Country"
                        onChange={props.handleChange}
                        value={props.country}
                      />
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>

              <Card className="my-card">
                <Card.Header className="px-5 font-weight-bold py-5 bg-white">
                  <h4 className="font-weight-bold">Terms and Conditions</h4>
                </Card.Header>
                <Card.Body className="px-5 ">
                  <Form className="my-5">
                    <p className="mb-3">
                      Once you submit your request, we'll securely store your
                      information in an account to make sure we can contact you
                      when we find a match. We’ll send you a temporary password
                      that you can use to access your account and manage your
                      requests.
                    </p>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          onChange={props.handleChange}
                          name="terms"
                          checked={props.terms}
                          type="checkbox"
                        />
                        <Form.Check.Label>
                          I hereby agree to the{" "}
                          <span className="text-primary">
                            Terms & Conditions
                          </span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox">
                        <Form.Check.Input
                          onChange={props.handleChange}
                          name="privacy"
                          checked={props.privacy}
                          type="checkbox"
                        />
                        <Form.Check.Label>
                          I hereby agree to the{" "}
                          <span className="text-primary">Privacy Policy</span>
                        </Form.Check.Label>
                      </Form.Check>
                    </Form.Group>
                  </Form>
                </Card.Body>
              </Card>

              <Button
                variant="success"
                onClick={props.handleSubmit}
                className="font-weight-bold py-3 px-4 mt-4 mb-5 float-right"
              >
                Submit
              </Button>
              <Button
                variant="secondary"
                onClick={props.goBack}
                className="font-weight-bold py-3 px-4 mx-4 mt-4 mb-5 float-right"
              >
                Back
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  )
}

export default StepThree
