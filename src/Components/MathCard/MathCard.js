import React, { Component } from 'react';
import './MathCard.scss';
import { pemdas } from '../../problemSets';

class MathCard extends Component {
  constructor() {
    super()
    this.state= {
      expression: pemdas(),
      answer: ''
    }
  }

    render() {
      return (
        <div className='mathCard'>
          <p className='expression-text'>{this.state.expression}</p>
          <input type='text'/>
        </div>
      );
    }
}

export default MathCard;
