import React from 'react';

import './containers.css';
import './texts.css';

function Contact() {
  return (
    <div className="Background">
      <div className="FakeNavbar"/>
      <div className="SubTitleArea">
        <h2>
          Contact
        </h2>
      </div>
      <div className="TextArea">
        <p className="MainText">
        You can <span className="RedBackground">contact me</span> at :
        <br />
        <br />
        <a href="mailto:robin.dorion@gmail.com" alt="mail">robin.dorion@gmail.com</a>
        <br />
        <br />
        or
        </p>
        <div className="ContactsDiv">
          <div className="ContactsLogoDiv">
            <a 
                href="https://www.linkedin.com/in/rbndorion/" 
                alt="Linkedin Robin Dorion"  
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img src="" alt="Linkedin Logo" />
            </a>
            <a 
                href="https://github.com/Rbn777" 
                alt="Github Robin Dorion"  
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img src="" alt="Github Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;