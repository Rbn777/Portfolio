import React from 'react';

import './containers.css';
import './texts.css';

function Home() {
  return (
    <div className="Background">
      <div className="FakeNavbar"/>
      <div className="TextArea">
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
          OFEIJOJFEOJFEZOJOJFDSOJFDSOKJFDS
        </p>
      </div>
    </div>
  );
}

export default Home;