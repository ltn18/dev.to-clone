import React from 'react';
import {Navbar, Button, Container} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';

const Header = () => {
  const history = useHistory();
  const moveToAuth = () => {
    history.push("/auth");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between" sticky="top">
        <Container fluid="md">
          <Navbar.Brand>
            <img src="dev_logo.png" alt="Dev Story Logo" style={{width: "40px", height: "40px"}}/>
            {" "}Dev Story
          </Navbar.Brand>
          <div className="justify-content-end">
            <Button variant="outline-info" type="submit" onClick={moveToAuth}>Write a post</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
