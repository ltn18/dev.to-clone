import React, { useContext } from 'react';
import authCtx from '../contexts/auth';


// một function return ra một function khác
// nhận vào một component và return một component khác
const withAuth = (Component) => () => {
  const { authUser } = useContext(authCtx);
  if (authUser) {
    return <Component />
  } 
  return <div>User must login to perform this task!</div>;
}