import React from "react"
import { Container } from "react-bootstrap"

import Header from "./header"

export default ({ children }) => (
  <div>
    <Header />
    <Container fluid>{children}</Container>
  </div>
)
