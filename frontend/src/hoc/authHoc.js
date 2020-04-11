import React, { useContext } from 'react';
import authCtx from '../contexts/auth';
import Auth from '../containers/auth/';

// một function return ra một function khác
// nhận vào một component và return một component khác
const withAuth = (Component) => (props) => {
  const { authUser } = useContext(authCtx);
  if (!authUser) {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {

    } else {
      return <Auth {...props} />;
    }
  }
  return <Component {...props} /> // 2 props truyền vào có giống nhau ko?
}

export default withAuth;