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
      currentStep: 2, // Default is Step 1
      supplies: [],
    }
    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this)
    this.handleNext = this.handleNext.bind(this)
  }

  render() {
    return (
      <div>
        <Navbar fixed="top" className="shadow-sm py-3" bg="light">
          <Navbar.Brand className="ml-5" href="#home">
            <img alt="" height="30" src={logo} />
          </Navbar.Brand>
        </Navbar>

        <form onSubmit={this.handleSubmit}>
          {/* Render the form steps and pass in the required props */}
          <Step1
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            handleNext={this.handleNext}
          />
          <Step2
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
          />
          {/* <Step3
            currentStep={this.state.currentStep}
            handleChange={this.handleChange}
            password={this.state.password}
          /> */}
        </form>
      </div>
    )
  }

  // event handler for thr initial start button
  handleNext = () => {
    let currentStep = this.state.currentStep
    currentStep += 1
    this.setState({ currentStep: currentStep })
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target
    this.setState({
      [name]: value,
    })
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, username, password } = this.state
    alert(`Your registration detail: \n 
      Email: ${email} \n 
      Username: ${username} \n
      Password: ${password}`)
  }
}
export default Request
