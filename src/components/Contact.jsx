import React, { useState } from 'react';

import './containers.css';
import './texts.css';

import GithubLogoRed from '../medias/GithubLogo-red-02.svg';
import GithubLogoWhite from '../medias/GithubLogo-white-01.svg';
import LinkedinLogoRed from '../medias/LinkedinLogo-red-02.svg';
import LinkedinLogoWhite from '../medias/LinkedinLogo-white-01.svg';

function Contact() {
  const [githubRed, setGithubRed] = useState(false)
  const [linkedinRed, setLinkedinRed] = useState(false)

  const handleGithub = () => {
    setGithubRed(!githubRed);
  }

  const handleLinkedin = () => {
    setLinkedinRed(!linkedinRed);
  }

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
                  <img 
                    onMouseOver={handleLinkedin} 
                    onMouseOut={handleLinkedin}
                    className="SocialLogo" 
                    src={linkedinRed ? LinkedinLogoRed : LinkedinLogoWhite} 
                    alt="Linkedin Logo" 
                  />
            </a>
            <a 
                href="https://github.com/Rbn777" 
                alt="Github Robin Dorion"  
                target="_blank" 
                rel="noopener noreferrer"
                >
                  <img 
                    onMouseOver={handleGithub}
                    onMouseOut={handleGithub}
                    className="SocialLogo" 
                    src={githubRed ? GithubLogoRed : GithubLogoWhite} 
                    alt="Github Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;