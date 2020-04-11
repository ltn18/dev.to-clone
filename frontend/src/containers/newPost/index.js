import React from 'react';
import { Container } from 'react-bootstrap';
import withAuth from '../../hoc/authHoc';

const NewPost = () => {
  return (<Container>Write new post</Container>)
}

export default withAuth(NewPost); // using higher order function;
