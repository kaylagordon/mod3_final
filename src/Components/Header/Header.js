import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateTimer } from '../../actions';

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      minutesLeft: 0,
      secondsLeft: 0
    }
  }

  countdown = () => {
    const tick = () => {
      if(this.state.secondsLeft > 0) {
        let newSeconds = this.state.secondsLeft - 1;
        this.setState({
          secondsLeft: newSeconds
        })
        setTimeout(tick, 1000);
      } else if (this.state.minutesLeft >= 1) {
        let newMinutes = this.state.minutesLeft - 1;
        this.setState({
          minutesLeft: newMinutes,
          secondsLeft: 60
        })
        setTimeout(tick, 1000);
      } else {
        this.props.updateTimer('isOver', true)
      }
    }

    tick();
  }

  componentDidMount = async () => {
    await this.setState({
      minutesLeft: Math.floor(this.props.startTime / 60),
      secondsLeft: this.props.startTime % 60
    })

    this.countdown();
  }

  render() {
    return (
      <header>
      <h1>MATH<span className='highlight-title'>4</span>YOU</h1>
      <h2>TIME LEFT: 0{this.state.minutesLeft}:{this.state.secondsLeft < 10 ? `0${this.state.secondsLeft}` : this.state.secondsLeft}</h2>
      <Link to = '/select'>
      <button className='go-back-button'>GO BACK</button>
      </Link>
      </header>
    );
  }
};

export const mapStateToProps = state => ({
  startTime: state.timer.startTime
})

export const mapDispatchToProps = dispatch => ({
  updateTimer: (propertyToChange, updatedValue) => dispatch(updateTimer(propertyToChange, updatedValue))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
