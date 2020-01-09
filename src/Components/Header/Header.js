import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>MATH<span className='highlight-title'>4</span>YOU</h1>
      <h2>TIME LEFT: 00:21</h2>
      <Link to = '/select'>
        <button className='go-back-button'>GO BACK</button>
      </Link>
    </header>
  );
}

export default Header;
