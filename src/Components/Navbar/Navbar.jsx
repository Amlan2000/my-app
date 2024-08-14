import React from 'react'; // Importing React and useEffect hook
import './Navbar.css'; // Importing the CSS file for styling
import headerlogo from '../../images/satyamev_jayte_logo.png'

// Defining the Navbar component
const Navbar = () => {
  // useEffect hook to add keyboard event listener when the component mounts
  // Empty dependency array ensures this runs only on mount and unmount

  // JSX to render the navbar
  return (
    <nav className="navbar">
      <div className='left-logo'>
      <img src = {headerlogo} className='left-logo-img'/>
      <ul>
      <li className='left-logo-text'>Government of India</li>
      <li className='left-logo-text'>पर्यटन मंत्रालय</li>
      </ul>
      </div>
      <div className='navbar-all-list'>  
      <ul className='navbar-all-list'>
        <li className="navbar-item">
          <span>About us</span>
          </li>
        <li className="navbar-item">
          <span>Schemes & Guidlines</span>
          </li>
        <li className="navbar-item">
          <span>Public Grievances</span>
          </li>
        <li className="navbar-item">
          <span>Parliament Questions+</span>
          </li>
        <li className="navbar-item">
          <span>Media+</span>
          </li>
        <li className="navbar-item">
          <span>Important Link+</span>
          </li>      
          </ul>  
        </div>      
        <div className='ham-menu'>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
        </div>
      
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component for use in other parts of the app
