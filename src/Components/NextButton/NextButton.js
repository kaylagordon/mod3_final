import React from 'react';
import './NextButton.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTimer, resetGameStats } from '../../actions';


export const NextButton = ({ nextLink, updateTimer, resetGameStats }) => {
  const resetInfo = () => {
    if(nextLink === '/') {
      updateTimer('isOver', false);
      resetGameStats();
    }
  }

  return (
    <Link to = {nextLink}>
      <button
        className='nextButton'
        onClick={resetInfo}
      >let's go</button>
    </Link>
  );
}

export const mapDispatchToProps = dispatch => ({
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue)),
  resetGameStats: () => dispatch(resetGameStats())
})

export default connect(null, mapDispatchToProps)(NextButton);
