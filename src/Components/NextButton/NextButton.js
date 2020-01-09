import React from 'react';
import './NextButton.scss';
import { Link } from 'react-router-dom';


function NextButton({ nextLink }) {

  return (
    <Link to = {nextLink}>
      <button className='nextButton'>let's go</button>
    </Link>
  );
}

export default NextButton;
