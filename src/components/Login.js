import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const customDivStyle = {
    width: '700px', // Set the width as needed
    height: '400px', // Set the height as needed
    background: '#cce0ed', // Set the background color or any other styles
    margin: '30px auto',
    padding: '30px'
   
  };
  return (

    <div style={customDivStyle}>
    <form>
        <h3>Sign In</h3>
        <div className="mb-3">
          <label> <FontAwesomeIcon icon={faEnvelope} />Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="mb-3">
          <label> <FontAwesomeIcon icon={faKey} /> Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
       
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
      
        <p className="forgot-password text-right">
          Forgot <a href="/">password?</a>
        </p>
      </form>
    </div>
  )
}

export default Login;
