import React from 'react';

import './containers.css';
import './texts.css';

import project1Img from '../medias/Manny-projectimg.jpg';
import project2Img from '../medias/Squizz-appimg.jpg';

export function Project1() {
  return (
    <div className="Project">
      <div className="ProjectImg">
        <img src={project1Img} alt="Manny Website" />
      </div>
      <div className="ProjectText">
        <p className="ProjectTitle">Manny Building Website</p>
        <p className="MainText">
          School project of a static website representing Manny building in Nantes, FRANCE.
          <br />
          Technologies used : HTML5, CSS3.
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
        <p className="MainText">
          School project of a React quizz application. 
          <br />
          Technologies used : React with bootstrap, axios, sweetalert libraries and Open Trivia Database API.
        </p>
        </div>
    </div>
  );
}