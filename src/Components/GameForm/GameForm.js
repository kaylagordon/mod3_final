import React, { Component } from 'react';
import './GameForm.scss';
import { connect } from 'react-redux';
import { updateProblemSet } from '../../actions/updateProblemSet';
import { updateTimer } from '../../actions/updateTimer';

class GameForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedTime: ''
    }
  }

  updateSelectedProblemSet = event => {
    event.preventDefault();
    this.props.updateProblemSet(event.target.value)
  }

  updateSelectedTime = event => {
    event.preventDefault();
    this.props.updateTimer('startTime', parseInt(event.target.value))
  }

  render() {
    return (
      <form>
        <p className='form-label'>choose your topic:</p>
        <div className='form-buttons-container'>
          <button
            className='form-button'
            value='simplify'
            name='selectedProblemSet'
            onClick={this.updateSelectedProblemSet}
          >PEMDAS</button>
          <button
            className='form-button'
            value='factoring'
            name='selectedProblemSet'
            onClick={this.updateSelectedProblemSet}
          >FACTORING</button>
          <button
            className='form-button'
            value='deriving'
            name='selectedProblemSet'
            onClick={this.updateSelectedProblemSet}
          >DERIVING</button>
          <button
            className='form-button'
            value='trigonometry'
            name='selectedProblemSet'
            onClick={this.updateSelectedProblemSet}
          >TRIGONOMETRY</button>
          <button
            className='form-button'
            value='mixed'
            name='selectedProblemSet'
            onClick={this.updateSelectedProblemSet}
          >MIXED BAG</button>
        </div>
        <p className='form-label'>choose your time:</p>
        <div className='form-buttons-container'>
          <button
            className='form-button'
            value='180'
            name='selectedTime'
            onClick={this.updateSelectedTime}
          >3 MIN</button>
          <button
            className='form-button'
            value='60'
            name='selectedTime'
            onClick={this.updateSelectedTime}
          >1 MIN</button>
          <button
            className='form-button'
            value='30'
            name='selectedTime'
            onClick={this.updateSelectedTime}
          >30 SEC</button>
        </div>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  updateProblemSet: problemSet => dispatch(updateProblemSet(problemSet)),
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue))
})

export default connect(null, mapDispatchToProps)(GameForm);
