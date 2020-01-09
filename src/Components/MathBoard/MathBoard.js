import React from 'react';
import './MathBoard.scss';
import MathCard from '../MathCard/MathCard';

function MathBoard() {
  return (
    <section className='mathBoard'>
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
      <MathCard />
    </section>
  );
}

export default MathBoard;
