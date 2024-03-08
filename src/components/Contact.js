import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
  return (
    <div style={{ backgroundColor: '#cce0ed', minHeight: '100vh' ,padding:'30px'}}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h2>Contact Us</h2>
            <p>
              We would love to hear from you! Feel free to reach out to us with any questions, feedback, or inquiries.
            </p>
            <address>
              <strong>Email:</strong> info@example.com<br />
              <strong>Phone:</strong> +1 (123) 456-7890
            </address>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Your Name</label>
                <input type="text" className="form-control" id="name" placeholder="John Doe" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Your Email</label>
                <input type="email" className="form-control" id="email" placeholder="john@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Type your message here"></textarea>
              </div>
              <button type="submit" className="btn btn-primary" >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
