import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import Banner from './banner';
import Login from './login';
import Register from './register';
import Footer from './footer'

const Auth = () => {
  const [haveACCOUNT, setHaveACCOUNT] = useState(true);
  return (
    <>
    <Container className="d-flex flex-column align-items-center">
      <Banner />
      {haveACCOUNT?<Login onMoveToRegister={()=>{setHaveACCOUNT(false)}}/>:<Register onMoveToLogin={()=>{setHaveACCOUNT(true)}}/>}
    </Container>
    <Footer />
    </>
  )
}

export default Auth

