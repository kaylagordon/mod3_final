import React, { Component } from 'react';
import './MathCard.scss';
import { problemSets } from '../../problemSets';
import { connect } from 'react-redux';
import { getAnswer } from '../../apiCalls/apiCalls'

class MathCard extends Component {
  constructor({ currentProblemSet }) {
    super({ currentProblemSet });
    this.state= {
      expression: problemSets[currentProblemSet](),
      answer: '',
      evaluatedTo: 'waiting'
    };
  };

  updateAnswer = event => {
    this.setState({
      answer: event.target.value
    });
  };

  checkAnswer = () => {
    getAnswer(this.props.currentProblemSet, this.state.expression)
    .then(data => {
      if(data.result.split(' ').join('') === this.state.answer) {
        this.setState({
          evaluatedTo: 'correct'
        })
        setTimeout(this.getNewCard, 2000)
      } else {
        this.setState({
          evaluatedTo: 'incorrect'
        })
      }
    })
  }

  getNewCard = () => {
    this.setState({
      expression: problemSets[this.props.currentProblemSet](),
      answer: '',
      evaluatedTo: 'waiting'
    })
  }

  render() {
    return (
      <div className={`mathCard ${this.state.evaluatedTo}`}>
        <p className='expression-text'>{this.state.expression}</p>
        <input
          type='text'
          value={this.state.answer}
          onChange={this.updateAnswer}
        />
        <button
          onClick={this.checkAnswer}
        >CHECK</button>
      </div>
    );
  };
};

export const mapStateToProps = state => ({
  currentProblemSet: state.currentProblemSet
})

export default connect(mapStateToProps)(MathCard);
