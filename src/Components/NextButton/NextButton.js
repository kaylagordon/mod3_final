import React from 'react';
import './NextButton.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTimer } from '../../actions/updateTimer';


function NextButton({ nextLink, updateTimer }) {
  const resetInfo = () => {
    if(nextLink === '/end') {
      updateTimer('isOver', false);
    }
  }

  return (
    <Link to = {nextLink}>
      <button
        className='nextButton'
        onClick={resetInfo()}
      >let's go</button>
    </Link>
  );
}

export const mapDispatchToProps = dispatch => ({
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue))
})

export default connect(null, mapDispatchToProps)(NextButton);
