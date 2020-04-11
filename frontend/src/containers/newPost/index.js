import React, { useContext, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import axios from '../../config/axios';
import { useAsync } from '../../hooks/useAsync';

import Auth from '../auth';
import authCtx from '../../contexts/auth'

const NewPost = () => {
  const { authUser } = useContext(authCtx);

  const [profileApiData, fetchProfile] = useAsync(
    {},
    useCallback(
      (token) =>
        axios.get(
          "http://localhost:5000/me",
          {
            headers: {
              Authorization: "Bearer " + token,
            }
          }
        )
    )
  );


  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      // Step 1: login with token
      // Step 2: get userProfile
      // Step 3: update authUser context with user
      fetchProfile(jwt);
    }
  }, []) // fetchProfile 1 lần, nếu để thành dependency sẽ load đến lag :v

  if (!authUser) return <Auth />;

  return (
    <Container>
      Write new post
    </Container>
  )
}

export default NewPost
