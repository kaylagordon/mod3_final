import React from 'react';
import './EndPage.scss';

function EndPage() {
  return (
    <section className='endPage'>
      <h1>GREAT WORK!</h1>
      <h2>your results:</h2>
      <p className='end-data-text'><span className='highlight-data' id='number-correct-text'>75</span> correct answers</p>
      <p className='end-data-text'><span className='highlight-data' id='number-correct--per-minute-text'>25</span> correct answers per minute</p>
      <p className='end-data-text'><span className='highlight-data' id='percent-accurate-text'>86%</span> accuracy</p>
    </section>
  );
}

export default EndPage;
