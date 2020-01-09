import React from 'react';
import './GameForm.scss';

function GameForm() {
  return (
    <form>
      <p className='form-label'>choose your topic:</p>
      <div className='form-buttons-container'>
        <button className='form-button' id='pemdas'>PEMDAS</button>
        <button className='form-button' id='factoring'>FACTORING</button>
        <button className='form-button' id='deriving'>DERIVING</button>
        <button className='form-button' id='trigonometry'>TRIGONOMETRY</button>
        <button className='form-button' id='mixed'>MIXED BAG</button>
      </div>
      <p className='form-label'>choose your time:</p>
      <div className='form-buttons-container'>
        <button className='form-button' id='min-3'>3 MIN</button>
        <button className='form-button' id='min-1'>1 MIN</button>
        <button className='form-button' id='sec-30'>30 SEC</button>
      </div>
    </form>
  );
}

export default GameForm;
