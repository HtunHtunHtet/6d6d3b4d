import React from 'react';
import Logo from './Logo'
import Navigation from "./Navigation";

const Header = () => {
  return (
      <header>
          <div className="header-flex">
              {/*Logo*/}
              <Logo />

              {/*Navigation*/}
              <Navigation />
          </div>
      </header>
  );
};

export default Header;
