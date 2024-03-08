import React from 'react';
import backgroundImage from './bg.png';

const Home = () => {
  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    zIndex: -1,
    width: '100%',
    height: '100vh', // Set the height as needed
    padding:'30px'
    
  };

  const textdivStyle={
    padding : '20px',
    margin: '20px',
    fontSize: '18px',
  }
  const buttonStyle={
    color:'black',
    fontWeight: 'bold',
    fontSize: '18px',
    
  }
  return (
    <div style={backgroundStyle}>
       <div className="overlay" style={textdivStyle}>
          <h2>Have Some Pending Projects?</h2>
          <i>
            <h5>Need Someone's help to complete it?</h5> <br />
            <p>
              Ideas reshape the world, but there's always a starting and learning point.<br />
              It's time to redefine the way we learn.
            </p>
            <p>
              Learnt a new skill, but have no one to work on a starting project with?<br />
              Thought of an idea but don't have the necessary tech stacks?<br />
              Search for people to collaborate with, or propose a project and let collaborators find you.<br />
              With us, it's time to implement and learn things on the go, but not alone anymore!
            </p>
          </i>
          <br /><br /><br /><br />
          <button
            type="button"
            id="projectbutton"
            className="btn btn-outline-warning"
            onClick={() => {}} // Add your logic here
            style={buttonStyle}
          >
            Find a Project Partner
          </button>
        </div>
    </div>
  );
};

export default Home;
