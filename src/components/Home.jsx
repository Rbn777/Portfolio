import React from 'react';

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
        I’m <span className="RedBackground">Robin</span>, a 27 year old junior full-stack developer from France.
        <br />
        <br />
        After my college degree in Graphic and brand Design and an internship at the French Chamber of Commerce in Great Britain, 
        I got a job as a graphic designer at Jacob Delafon Paris, where I stayed for almost 2 years.
        In March 2020 I decided it was time for a change. I have been able to discover HTML and CSS and develop an interest for it during my graphic 
        design studies, I decided to started a professional retraining at Wild Code School Nantes to add web programming to my set of technical skills.
        I quickly started to love what i was taught, from Javascript to sql, especially ReactJS.
        Because the best way to learn is to practice, during this time, I have been able to work on several projects like a static HTML/CSS website or
        a dynamic full-stack webapp for Doctolib company and more ...
        <br />
        <br />
        I’m enthusiastic, super curious, committed, and I also a adapt really fast!
        <br />
        <br />
        My current set of <span className="RedBackground">languages/technologies :</span>
        <br />
        <br />
        HTML5 - CSS3 - JAVASCRIPT - REACTJS - REDUX - AXIOS - STYLED COMPONENTS - CSS MODULES - EXPRESSJS - SQL - MYSQL
        <br />
        <br />
        <a target="_blank" rel="noreferrer" href="../medias/CV_ROBIN_DORION_ENGLISH.pdf">Download my resume here</a>
        </p>
      </div>
    </div>
  );
}

export default Home;