import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function Header({ startTime }) {
  const countdown = () => {
    var minutes = Math.floor(startTime / 60);
    var seconds = startTime % 60;

    const tick = () => {
      seconds--;
      if(seconds > 0) {
        // "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        setTimeout(tick, 1000);
      } else {
        console.log("Game over");
      }
    }

    tick();
  }

  return (
    <header>
      <h1>MATH<span className='highlight-title'>4</span>YOU</h1>
      <h2>TIME LEFT: {countdown()}</h2>
      <Link to = '/select'>
        <button className='go-back-button'>GO BACK</button>
      </Link>
    </header>
  );
};

export const mapStateToProps = state => ({
  startTime: state.timer.startTime
})

export default connect(mapStateToProps)(Header);
