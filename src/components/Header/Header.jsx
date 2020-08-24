import React from 'react';
import './header.scss';

const Header = (props) => (
  <>
    <header className="quiz__header">
      <div className="header__logo">
        <h1>
          Song
          <span>Bird</span>
        </h1>
      </div>
      <div className="header__score">
        <span>
          Score:
          {' '}
          {props.score}
        </span>
      </div>
    </header>
  </>
);

export default Header;
