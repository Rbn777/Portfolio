import React from 'react';

import cv from "../medias/dorionRobinCV.pdf";

import './containers.css';
import './texts.css';

function Home() {
  return (
    <div className="Background">
      <div className="FakeNavbar"/>
      <div className="HomeTitleArea">
        <h1><span className="Hi">Hi!</span>
          <br />
          <span className="SubTitle">
            I'm <span className="RedText">Robin</span>,
            <br /> 
            a junior fullstack developer <span className="RedText">&</span> graphic designer
          </span>
        </h1>
      </div>
      <div className="SubTitleArea">
        <h2>
          About me
        </h2>
      </div>
      <div className="TextArea">
        <p className="MainText">
        I’m <span className="RedBackground">Robin</span>, a 27 year old junior <span className="BoldText">full-stack developer</span> from France.
        <br />
        <br />
        After my college degree in <span className="RedBackground">Graphic and brand Design</span> and an internship at <span className="BoldText">the French Chamber of Commerce in Great Britain</span>, 
        I got a job as a graphic designer at <span className="BoldText">Jacob Delafon Paris</span>, where I stayed for almost 2 years.
        In March 2020 I decided it was time for a change. I have been able to discover HTML and CSS and develop an interest for it during my graphic 
        design studies, I decided to start <span className="RedBackground">a professional retraining</span> at <span className="BoldText">Wild Code School Nantes</span> to add web programming to my set of technical skills.
        I quickly started to love what i was taught, from <span className="RedBackground">Javascript to sql, 
        especially ReactJS</span>. Because the best way to learn is to practice, during this time, I have been able to 
        work on several projects like a static <span className="BoldText">HTML/CSS website or
        a dynamic full-stack webapp for Doctolib company and more ...</span>
        <br />
        <br />
        I’m enthusiastic, super curious, committed, and I also adapt really fast!
        <br />
        <br />
        My current stack of <span className="RedBackground">languages/technologies :</span>
        <br />
        <br />
        <span className="BoldText">HTML5 - CSS3 - JAVASCRIPT - REACTJS - NODEJS - REDUX - AXIOS - STYLED COMPONENTS - CSS MODULES - EXPRESSJS - SQL - MYSQL - GIT - GITHUB</span>
        <br />
        <br />
        <a href={cv} download>Download my resume here</a>
        </p>
      </div>
    </div>
  );
}

export default Home;