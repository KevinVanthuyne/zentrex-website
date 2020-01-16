import React from "react"

export default props => (
  <a href={props.href} target="_blank" rel="noopener noreferrer">
    {props.children}
  </a>
)
