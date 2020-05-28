import React from "react"
import logo from "./assets/img/logo.svg"

import { Navbar, Nav, Button, Form, Container, Row, Col } from "react-bootstrap"
import Step1 from "./components/Form/StepOne"
import Step2 from "./components/Form/StepTwo"
import Step3 from "./components/Form/StepThree"
import Step4 from "./components/Form/StepFour"
import Step5 from "./components/Form/StepFive"

class Request extends React.Component {
  constructor(props) {
    super(props)
    // Set the initial input values
    this.state = {
      currentStep: 1, // Default is Step 1
      selectedProduct: [],
      firstName: "",
      lastName: "",
      title: "",
      email: "",
      phoneNumber: "",
      linkUrl: "",
      orgType: "",
      orgName: "",
      orgWebsite: "",
      location1: "",
      location2: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      terms: false,
      privacy: false,
    }
    // Bind the submission to handleChange()
    // this.handleChange = this.handleChange.bind(this)
    this.handleChangeProduct = this.handleChangeProduct.bind(this)
    this.handleNext = this.handleNext.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.goBack = this.goBack.bind(this)

    this.products = [
      { id: "1", name: "Respirators", sub: "Surgical N95 or equivalent" },
      { id: "2", name: "Respirators", sub: "N95 or equivalent" },
      { id: "3", name: "Respirators", sub: "KN95 or equivalent" },
      { id: "4", name: "Gowns", sub: "PB70" },
      {
        id: "5",
        name: "Examination Gloves",
        sub: "Powder-free nitrile (ASTM D6319)",
      },
      {
        id: "6",
        name: "Examination Gloves",
        sub: "Powder-free nitrile (ASTM D3578)",
      },
      { id: "7", name: "Facial Shields", sub: "ANSI Z87.1" },
      { id: "8", name: "Hand Sanitizer", sub: "" },
      { id: "9", name: "Disinfecting wipes", sub: "EPA Certified" },
      { id: "10", name: "Surgical Masks", sub: "" },
    ]
  }

  render() {
    return (
      <>
        <Navbar fixed="top" className="shadow-sm py-3" bg="light">
          <Navbar.Brand className="ml-5" href="#home">
            <img alt="" height="25" src={logo} />
          </Navbar.Brand>
        </Navbar>
        {/* Render the form steps and pass in the required props */}
        <Step1
          currentStep={this.state.currentStep}
          handleNext={this.handleNext}
        />
        <div>
          <Step2
            currentStep={this.state.currentStep}
            products={this.products}
            handleChange={this.handleChangeProduct}
            handleNext={this.handleNext}
          />
          <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            title={this.state.title}
            email={this.state.email}
            phoneNumber={this.state.phoneNumber}
            linkUrl={this.state.linkUrl}
            orgType={this.state.orgType}
            orgName={this.state.orgName}
            orgWebsite={this.state.orgWebsite}
            location1={this.state.location1}
            location2={this.state.location2}
            city={this.state.city}
            state={this.state.state}
            zip={this.state.zip}
            country={this.state.country}
            terms={this.state.terms}
            privacy={this.state.privacy}
            goBack={this.goBack}
          />
          {/* <Container className="bg-primary-light pb-7 pt-3">
            <Row className="justify-content-center">
              <Col md="10" className="float-right">
                <div className="float-right">
                  {this.previousButton()}
                  {this.nextButton()}
                </div>
              </Col>
            </Row>
          </Container> */}
        </div>
      </>
    )
  }

  handleChange = (event) => {
    // thiss works but for the checked prop i have to comment it
    // const { name, value } = event.target
    const target = event.target
    const value = target.type === "checkbox" ? target.checked : target.value
    const name = target.name
    this.setState({ [name]: value })
  }

  // event handler for thr initial start button
  handleNext = () => {
    let currentStep = this.state.currentStep
    currentStep += 1
    this.setState({ currentStep: currentStep })
  }

  // Use the submitted data to set the state
  handleChangeProduct(value) {
    this.setState({
      selectedProduct: value,
    })
  }

  goBack() {
    let currentStep = this.state.currentStep
    currentStep -= 1
    this.setState({ currentStep: currentStep })
  }
  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const {
      selectedProduct,
      firstName,
      lastName,
      title,
      email,
      phoneNumber,
      linkUrl,
      orgType,
      orgName,
      orgWebsite,
      location1,
      location2,
      city,
      zip,
      country,
      state,
      terms,
      privacy,
    } = this.state
    alert(`Registration Sucessful \n 
    ${title} ${firstName} ${lastName}\n
    Your contact information:\n
    ${email} ${phoneNumber} \n
    Your link: ${linkUrl}\n
    \n
    Your Organization is a ${orgType} type, ${orgName} located at ${location1} ${location2}, ${city}, ${state}, ${country} with a website ${orgWebsite} and ZIP: ${zip}\n
    Terms is ${terms} and Privacy Policy is ${privacy}\n
    You selected this products ${selectedProduct}`)
  }
}
export default Request
