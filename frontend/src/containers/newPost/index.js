import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';

import Auth from '../auth';
import authCtx from '../../contexts/auth'

const NewPost = () => {
  const { authUser } = useContext(authCtx);
  if (!authUser) return <Auth />;

  return (
    <Container>
      Write new post
    </Container>
  )
}

export default NewPost
