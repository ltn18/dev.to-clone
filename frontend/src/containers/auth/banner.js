import React from 'react'

const style = {
  border: '3px solid #343a40',
  borderRadius: "8px",
  backgroundColor: "#17a2b8",
  padding: "10px 0px",
}

const Banner = () => (
  <div className="d-flex align-items-center flex-column w-50 my-5" style={style}>
    <img src="dev_logo.png" alt="" className="w-50 my-5"/>
    <h5 className="code" style={{color: "white"}}>Welcome to DEV STORY</h5>
    <p style={{color: "white"}}>Sign in and start to share with the community</p>
  </div>
);

export default Banner;
