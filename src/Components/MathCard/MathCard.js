import React, { Component } from 'react';
import './MathCard.scss';
import { problemSets } from '../../problemSets';
import { connect } from 'react-redux';

class MathCard extends Component {
  constructor({ currentProblemSet }) {
    super({ currentProblemSet });
    this.state= {
      expression: problemSets[currentProblemSet](),
      answer: ''
    };
  };

  updateAnswer = event => {
    this.setState({
      answer: event.target.value
    });
  };

  render() {
    return (
      <div className='mathCard'>
        <p className='expression-text'>{this.state.expression}</p>
        <input
          type='text'
          value={this.state.answer}
          onChange={this.updateAnswer}
        />
      </div>
    );
  };
};

export const mapStateToProps = state => ({
  currentProblemSet: state.currentProblemSet
})

export default connect(mapStateToProps)(MathCard);
