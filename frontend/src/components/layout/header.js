import React, { useContext } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useHistory, Link } from "react-router-dom";

import authCtx from "../../contexts/auth";

const Header = () => {
  const history = useHistory();

  const { authUser } = useContext(authCtx);
  // console.log(authUser); 

  const moveToNewPost = () => {
    history.push("/new");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-between" sticky="top">
        <Container fluid="md">
          <Navbar.Brand>
            <Link to="/">
              <img src="dev_logo.png" alt="Dev Story Logo" style={{ width: "40px", height: "40px" }} />
            </Link>
            {" "}Dev Story
          </Navbar.Brand>
          <div className="justify-content-end">
            <Button variant="outline-info" type="submit" onClick={moveToNewPost}>Write a post</Button>
            {authUser && <span style={{ color: 'white' }}>&nbsp; {authUser.user.username}</span>} 
          </div>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
