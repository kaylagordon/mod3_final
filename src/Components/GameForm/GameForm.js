import React, { Component } from 'react';
import './GameForm.scss';
import { connect } from 'react-redux';
import { updateProblemSet } from '../../actions/updateProblemSet';
import { updateTimer } from '../../actions/updateTimer';

export class GameForm extends Component {
  updateSelected = event => {
    event.preventDefault();
    if (event.target.name === 'currentProblemSet') {
      this.props.updateProblemSet(event.target.value)
    } else if (event.target.name === 'currentTimer') {
      this.props.updateTimer('startTime', parseInt(event.target.value))
    }
  }

  renderButtons = (category, topics) => {
    return topics.map(topic => {
      return (
        <button
        key={Math.random()}
          className={`${this.props[category] === topic ?
            'form-button selected' :
            'form-button'}`
          }
          value={topic}
          name={category}
          onClick={this.updateSelected}
        >{category === 'currentProblemSet' ?
          topic.toUpperCase() :
          topic/60 + ' MIN'
        }</button>
      )
    })
  }

  render() {
    return (
      <form>
        <p className='form-label'>choose your topic:</p>
        <div className='form-buttons-container'>
          {this.renderButtons('currentProblemSet', ['simplify', 'factor', 'derive'])}
        </div>
        <p className='form-label'>choose your time:</p>
        <div className='form-buttons-container'>
          {this.renderButtons('currentTimer', [180, 60, 30])}
        </div>
      </form>
    );
  }
}

export const mapStateToProps = state => ({
  currentProblemSet: state.currentProblemSet,
  currentTimer: state.timer.startTime
})

export const mapDispatchToProps = dispatch => ({
  updateProblemSet: problemSet => dispatch(updateProblemSet(problemSet)),
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(GameForm);
