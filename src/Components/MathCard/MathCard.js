import React from 'react';
import './MathCard.scss';
import { pemdas } from '../../problemSets';

function MathCard() {

  return (
    <div className='mathCard'>
      <p className='expression-text'>{pemdas()}</p>
      <input type='text'/>
    </div>
  );
}

export default MathCard;
