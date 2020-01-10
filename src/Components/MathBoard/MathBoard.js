import React from 'react';
import './MathBoard.scss';
import MathCard from '../MathCard/MathCard';

function MathBoard() {
  const renderCards = () => {
    let cards = [];
    for (var i = 0; i < 8; i++) {
      cards.push(<MathCard key = {i} />)
    }
    return cards;
  }

  return (
    <section className='mathBoard'>
      {renderCards()}
    </section>
  );
};

export default MathBoard;
