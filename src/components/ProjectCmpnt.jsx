import React from 'react';

import './containers.css';
import './texts.css';

import project1Img from '../medias/Manny-projectimg.jpg';
import project2Img from '../medias/Squizz-appimg.jpg';
import project3Img from '../medias/Doctolib-hackathon.jpg';

export function Project1() {
  return (
    <div className="Project">
      <div className="ProjectImg">
        <img src={project1Img} alt="Manny Website" />
      </div>
      <div className="ProjectText">
        <p className="ProjectTitle">Manny Building Website</p>
        <p className="MainTextProject">
          School project of a static website representing Manny building in Nantes, FRANCE.
          <br />
          Technologies used : HTML5, CSS3.
          <br />
          <br />
          <a 
            href="https://manny-wcstraining.netlify.app/" 
            alt="Manny website"  
            target="_blank" 
            rel="noopener noreferrer"
            >
              Link to project demo
          </a>
        </p>
        </div>
    </div>
  );
}

export function Project2() {
  return (
    <div className="Project">
      <div className="ProjectImg">
        <img src={project2Img} alt="Squizz App" />
      </div>
      <div className="ProjectText">
        <p className="ProjectTitle">Squizz App</p>
        <p className="MainTextProject">
          School project of a React quizz application. 
          <br />
          Technologies used : React (with react-router, bootstrap, axios, sweetalert libraries) and Open Trivia Database API.
          <br />
          <br />
          <a 
            href="https://squizz.netlify.app" 
            alt="Squizz app"  
            target="_blank" 
            rel="noopener noreferrer"
            >
              Link to project demo
          </a>
        </p>
        </div>
    </div>
  );
}

export function Project3() {
  return (
    <div className="Project">
      <div className="ProjectImg">
        <img src={project3Img} alt="Doctolib Hackathon"/>
      </div>
      <div className="ProjectText">
        <p className="ProjectTitle">Doctolib Hackathon</p>
        <p className="MainTextProject">
          School project in partnership with Doctolib of a healthcare application. 
          <br />
          Technologies used : React (with react-router, redux, axios, react-notifications libraries), ExpressJS back, Sql database.
          <br />
          <br />
          <a 
            href="https://hackathon-doctolib.netlify.app" 
            alt="Doctolib Hackathon"  
            target="_blank" 
            rel="noopener noreferrer"
            >
              Link to project demo
          </a>
        </p>
        </div>
    </div>
  );
}