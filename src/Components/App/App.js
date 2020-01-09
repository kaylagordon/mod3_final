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
    <main>
      <Route exact path = '/'>
        <HomePage />
        <NextButton nextLink = '/select'/>
      </Route>
      <Route exact path = '/select'>
        <GameForm />
        <NextButton nextLink = '/play'/>
      </Route>
      <Route exact path = '/play'>
        <Header />
        <MathBoard />
      </Route>
      <Route exact path = '/end'>
        <EndPage />
        <NextButton nextLink = '/'/>
      </Route>
    </main>
  );
}

export default App;
