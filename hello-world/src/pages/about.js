import React from "react"
import Header from '../components/Header'
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `green` }}>
    <Link to="/">Home Page</Link>
    <Header headerText="About Page" />
    <Header headerText="Yo"/>
    <p>Hello from about page!</p>
     
  </div>
) 
