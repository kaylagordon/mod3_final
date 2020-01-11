import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTimer } from '../../actions/updateTimer';

function Header({ startTime, updateTimer }) {
  const countdown = () => {
    var minutes = Math.floor(startTime / 60);
    var seconds = startTime % 60;

    const tick = () => {
      seconds--;
      if(seconds > 0) {
        setTimeout(tick, 1000);
      } else {
        updateTimer({
          startTime: 0,
          isOver: true
        })
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

export const mapDispatchToProps = dispatch => ({
  updateTimer: time => dispatch(updateTimer(time))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
