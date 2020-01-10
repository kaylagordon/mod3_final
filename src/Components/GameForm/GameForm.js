import React, { Component } from 'react';
import './GameForm.scss';

class GameForm extends Component {
  constructor() {
    super();
    this.state = {
      selectedProblemSet: '',
      selectedTime: ''
    }
  }

  updateSelected = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form>
        <p className='form-label'>choose your topic:</p>
        <div className='form-buttons-container'>
          <button
            className='form-button'
            value='pemdas'
            name='selectedProblemSet'
            onClick={this.updateSelected}
          >PEMDAS</button>
          <button
            className='form-button'
            value='factoring'
            name='selectedProblemSet'
            onClick={this.updateSelected}
          >FACTORING</button>
          <button
            className='form-button'
            value='deriving'
            name='selectedProblemSet'
            onClick={this.updateSelected}
          >DERIVING</button>
          <button
            className='form-button'
            value='trigonometry'
            name='selectedProblemSet'
            onClick={this.updateSelected}
          >TRIGONOMETRY</button>
          <button
            className='form-button'
            value='mixed'
            name='selectedProblemSet'
            onClick={this.updateSelected}
          >MIXED BAG</button>
        </div>
        <p className='form-label'>choose your time:</p>
        <div className='form-buttons-container'>
          <button
            className='form-button'
            value='180'
            name='selectedTime'
            onClick={this.updateSelected}
          >3 MIN</button>
          <button
            className='form-button'
            value='60'
            name='selectedTime'
            onClick={this.updateSelected}
          >1 MIN</button>
          <button
            className='form-button'
            value='30'
            name='selectedTime'
            onClick={this.updateSelected}
          >30 SEC</button>
        </div>
      </form>
    );
  }
}

export default GameForm;
