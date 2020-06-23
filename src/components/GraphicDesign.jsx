import React from 'react';
import { Link } from 'react-router-dom';

import './containers.css';
import './texts.css';

function GraphicDesign() {
  return (
    <div className="Background">
      <div className="FakeNavbar"/>
      <div className="SubTitleArea">
        <h2>
          Portfolio
        </h2>
      </div>
      <div className="ButtonArea">
        <button className="UnclickedButton"><Link to="/projects">Web Development</Link></button>
        <button className="ClickedButton">Graphic Design</button>
      </div>
      <div className="TextArea">
        <h2>WORK IN PROGRESS</h2>
      </div>
    </div>
  );
}

export default GraphicDesign;
