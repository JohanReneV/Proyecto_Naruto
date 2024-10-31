import React from 'react';
import './Header.css';
import NavBar from '../NavBar/NavBar';

const Header = () => {
  return (
    <header>
      <img 
        id="image-movie" 
        src="https://th.bing.com/th/id/OIP.2EmAV30O0h7o_JYHV-w2JQHaJe?rs=1&pid=ImgDetMain" 
        alt="Naruto Uzumaki" 
      />
      <h1>Naruto Uzumaki</h1>
      <p>DatteBayo</p>
      <NavBar />
    </header>
  );
};

export default Header;
