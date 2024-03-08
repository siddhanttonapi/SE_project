import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  return (
    <div style={{ backgroundColor: "#cce0ed", minHeight: "100vh",padding:'30px' }}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6">
            <img
              src="https://images.pexels.com/photos/5553727/pexels-photo-5553727.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with your about us image URL
              alt="About Us"
              className="img-fluid rounded shadow-lg"
              style={{ height: "500px",width:"500px", objectFit: "cover",margin:"20px" }} // Adjust the height as needed
            />
          </div>
          <div className="col-lg-6 d-flex align-items-center">
            <div>
              <h1 className="mb-4">Welcome to Project Partner Finder</h1>
              <p>
                Project Partner Finder is your ultimate platform for discovering
                the perfect project partners. Whether you're working on a
                startup idea, a school project, or a freelance gig, our platform
                connects you with individuals possessing the right skills and
                enthusiasm.
              </p>
              <p>
                Our mission is to simplify the process of building great
                projects by bringing together talented individuals with diverse
                skill sets. We believe in collaboration, innovation, and the
                power of teamwork.
              </p>
              <p>
                Explore the potential of collaboration and make your projects a
                success with Project Partner Finder.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
