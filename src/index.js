import React from "react"
import ReactDOM from "react-dom"
import { Route, Link, BrowserRouter as Router } from "react-router-dom"

import "./assets/sass/app.scss"

import App from "./App"
import Request from "./Request"

// import Header from "./components/Header"
// import Footer from "./components/Footer"

import * as serviceWorker from "./serviceWorker"

const routing = (
  <Router>
    {/* <Header></Header> */}
    <div className="">
      <Route exact path="/" component={App} />
      <Route path="/request" component={Request} />
    </div>
    {/* <Footer></Footer> */}
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
