import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faKey, faPhone, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";




const Signup = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };
  return (
    <>
      <section className="signup" style={{ backgroundColor:  "#cce0ed", minHeight: "100vh",margin:'50px' }}>
        <div className="container mt-5" style={{ margin:'20px' ,padding:'20px'}}>
          <form>
           
            <h3>Register</h3>
            <div className="row mb-3">
              <div className="col-md-6">
                <label>
                  <FontAwesomeIcon icon={faUser} /> First name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>

              <div className="col-md-6">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </div>

            <div className="mb-3">
              <label>  <FontAwesomeIcon icon={faEnvelope} /> Email address</label>
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
              <label> <FontAwesomeIcon icon={faKey} /> Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm your password"
              />
            </div>
            <div className="mb-3">
              <label>   <FontAwesomeIcon icon={faUserCircle} /> Profile Image</label>
              <input
                type="file"
                accept="image/*"
                className="form-control"
                onChange={handleImageChange}
              />
            </div>
            <div className="mb-3">
              <label>   <FontAwesomeIcon icon={faTrophy} /> Bio</label>
              <input
                type="text"
                className="form-control"
                placeholder="Add your bio"
              />
            </div>
            <div className="mb-3">
              <label>  <FontAwesomeIcon icon={faLinkedin} />LinkedIn Profile</label>
              <input
                type="url"
                className="form-control"
                placeholder="LinkedIn Profile URL"
                pattern="https://www.linkedin.com/in/.+"
                title="Enter a valid LinkedIn profile URL"
              />
            </div>
            <div className="mb-3">
              <label>  <FontAwesomeIcon icon={faGithub} /> GitHub Profile</label>
              <input
                type="url"
                className="form-control"
                placeholder="GitHub Profile URL"
                pattern="https://github.com/.+"
                title="Enter a valid GitHub profile URL"
              />
            </div>
           
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            
            <p className="forgot-password text-right">
              Already registered <a href="/Login">Log in?</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default Signup;
