import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';
import NextButton from '../NextButton/NextButton';
import GameForm from '../GameForm/GameForm';
import Header from '../Header/Header';
import MathBoard from '../MathBoard/MathBoard';
import EndPage from '../EndPage/EndPage';
import './App.scss';

function App() {
  return (
    <main className='app'>
      <Route exact path = '/'>
        <HomePage />
        <NextButton />
      </Route>
      <Route exact path = '/select'>
        <GameForm />
        <NextButton />
      </Route>
      <Route exact path = '/play'>
        <Header />
        <MathBoard />
      </Route>
      <Route exact path = '/end'>
        <EndPage />
        <NextButton />
      </Route>
    </main>
  );
}

export default App;
