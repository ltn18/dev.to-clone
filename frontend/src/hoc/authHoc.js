import React, { useContext, useEffect, useCallback } from 'react';
import { useAsync } from '../hooks/useAsync';

import authCtx from '../contexts/auth';
import Auth from '../containers/auth/';
import Loading from '../components/loadingIndicator';
import axios from '../config/axios';

// một function return ra một function khác
// nhận vào một component và return một component khác
const withAuth = (WrappedComponent) => (props) => {
  const { authUser, setAuthUser } = useContext(authCtx);

  const [authProfileApi, fetchProfile] = useAsync(
    {},
    useCallback((token) =>
      axios.get(
        "http://localhost:5000/me",
        {
          headers: {
            Authorization: "Bearer " + token,
          }
        }),
      []
    ),
  )


  useEffect(() => {
    if (!authUser) {
      const jwt = localStorage.getItem("jwt");
      if (jwt) {
        fetchProfile(jwt).then(user => setAuthUser(user));
      }
    }
  }, [authUser, fetchProfile, setAuthUser])


  return !localStorage.getItem("jwt")
    ? (<Auth {...props} />)
    : authProfileApi.loading
      ? (<Loading />)
      : (<WrappedComponent {...props} />); // 2 props truyền vào có giống nhau ko?
}

export default withAuth;