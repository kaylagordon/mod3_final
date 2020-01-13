import React from 'react';
import { connect } from 'react-redux';
import './EndPage.scss';

function EndPage({ gameStats, time }) {
  const speed =
    ((gameStats.numberCorrect
    / time
    * 60)
    .toFixed(1))

  const accuracy =
    ((gameStats.numberCorrect /
    (gameStats.numberCorrect + gameStats.numberIncorrect)
    * 100)
    .toFixed(1))

  return (
    <section className='endPage'>
      <h1>GREAT WORK!</h1>
      <h2>your results:</h2>
      <p className='end-data-text'><span className='highlight-data' id='number-correct-text'>{gameStats.numberCorrect}</span> correct answers</p>
      <p className='end-data-text'><span className='highlight-data' id='number-correct--per-minute-text'>{speed}</span> correct answers per minute</p>
      <p className='end-data-text'><span className='highlight-data' id='percent-accurate-text'>{accuracy}%</span> accuracy</p>
    </section>
  );
}

export const mapStateToProps = state => ({
  gameStats: state.gameStats,
  time: state.timer.startTime
})

export default connect(mapStateToProps)(EndPage);
