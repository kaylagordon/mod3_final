import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../HomePage/HomePage';
import NextButton from '../NextButton/NextButton';
import GameForm from '../GameForm/GameForm';
import Header from '../Header/Header';
import MathBoard from '../MathBoard/MathBoard';
import EndPage from '../EndPage/EndPage';
import './App.scss';

export const App = ({ timerIsOver }) => {
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
        {timerIsOver ?
          <Redirect to = '/end'/> :
          (
            <section className='game-board'>
              <Header />
              <MathBoard />
            </section>
          )
        }
      </Route>
      <Route exact path = '/end'>
        <EndPage />
        <NextButton nextLink = '/'/>
      </Route>
    </main>
  );
}

export const mapStateToProps = state => ({
  timerIsOver: state.timer.isOver
})

export default connect(mapStateToProps)(App);
