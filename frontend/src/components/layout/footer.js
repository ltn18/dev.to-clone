import React from 'react'
import {Container} from 'react-bootstrap'
const style = {
  backgroundColor: "#f8f9fa",

}

const Footer = () => {
  return (
    <div style={style} className="py-3 code d-flex flex-column">
      <Container className="d-flex">
        <div className="d-flex flex-column">   
          <p>Open Source &nbsp;<span role="img" aria-label="Text">😇</span></p>   
          <p>Free Forever &nbsp;<span role="img" aria-label="Text">❤️</span></p> 
        </div>
        <div className="flex-grow-1 d-flex justify-content-end align-items-center">
          MindX Community copyright 2020 - 2024 &nbsp; <span role="img" aria-label="Text">🔥</span>
        </div>
      </Container>
    </div>
  )
}

export default Footer
