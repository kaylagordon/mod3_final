import React, { Component } from 'react';
import './NextButton.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTimer, resetGameStats } from '../../actions';
import arrowImage from '../../images/arrow-icon.png';


export class NextButton extends Component {
  resetInfo = () => {
    if(this.props.nextLink === '/') {
      this.props.updateTimer('isOver', false);
      this.props.resetGameStats();
    }
  }

  render() {
    return (
      <Link to = {this.props.nextLink}>
        <button
          className='nextButton'
          onClick={this.resetInfo}
        >
        <p>let's go!</p>
        <img src={arrowImage} alt='next-arrow'/>
        </button>
      </Link>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue)),
  resetGameStats: () => dispatch(resetGameStats())
})

export default connect(null, mapDispatchToProps)(NextButton);
