import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';


function App() {
  return (
    <div className='app'>
      <Route exact path = '/'>
        <p>/</p>
      </Route>
      <Route exact path = '/select'>
        <p>/select</p>
      </Route>
      <Route exact path = '/play'>
        <p>/play</p>
      </Route>
      <Route exact path = '/end'>
        <p>/end</p>
      </Route>
    </div>
  );
}

export default App;
