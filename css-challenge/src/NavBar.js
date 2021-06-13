import React from 'react';

import homeImage from './images/home.png';
import squaresImage from './images/squares.png';
import messageImage from './images/message.png';
import profileImage from './images/profile.png';

const NavBAr = () => {
  return (
    <section className=" navBarContainer">
      <nav className=" navBar">
        <img src={homeImage} className="homeImage"></img>
        <img src={squaresImage} className="squaresImage"></img>
        <img src={messageImage} className="messageImage"></img>
        <img src={profileImage} className="profileImage"></img>
      </nav>
    </section>
  );
};

export default NavBAr;
