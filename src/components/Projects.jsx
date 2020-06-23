import React from 'react';
import { Link } from 'react-router-dom';

import { Project1, Project2 } from './ProjectCmpnt.jsx';
import './containers.css';
import './texts.css';

function Projects() {
  return (
    <div className="Background">
      <div className="FakeNavbar"/>
      <div className="SubTitleArea">
        <h2>
          Portfolio
        </h2>
      </div>
      <div className="ButtonArea">
        <button className="ClickedButton">Web Development</button>
        <button className="UnclickedButton"><Link to="/projects/graphic-design">Graphic Design</Link></button>
      </div>
      <div className="ProjectArea">
        <Project1 />
        <Project2 />
      </div>
    </div>
  );
}

export default Projects;
