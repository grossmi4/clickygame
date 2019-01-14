import React, { Component } from 'react';
import Card from "./components/card";
import Navbar from "./components/navbar";
import numbers from "./primenumbers"
const shuffle = require('shuffle-array');

class App extends Component {
  state = {
    currentScore: 0,
    highScore: 0,
    numbers,
    clickedNumbers: []
  };

  componentDidMount() {
    this.setState(
      {
        numbers : this.shuffleCards()
      }
    )
  };

  shuffleCards = () => {
    return shuffle(this.state.numbers);
  };

  handleClick = (clickedId) => {
    if(this.state.clickedNumbers.includes(clickedId)) {
      this.gameOver();
    }
    else {
      this.state.clickedNumbers.push(clickedId);
      this.incrementScore();
    }
  };

  gameOver = () => {
    if(this.state.currentScore > this.state.highScore) {
      const tempScore = this.state.currentScore;
      this.setState({
        currentScore: 0,
        highScore: tempScore,
        numbers: this.shuffleCards(),
        clickedNumbers: []
      })
    }
    else {
      this.setState({
        currentScore: 0,
        highScore: this.state.highScore,
        numbers: this.shuffleCards(),
        clickedNumbers: []
      })
    }
  };

  incrementScore = () => {
    this.setState({
      numbers: this.shuffleCards(),
      currentScore: this.state.currentScore + 1
    })
  };

  render() {
    return (
      <div>
        <Navbar currentScore = {this.state.currentScore} highScore = {this.state.highScore} />
        <div className='container'>
          <div className='row'>
            {this.state.numbers.map(number => {
              return (<Card handleClick = {this.handleClick} id={number.id} number={number.number}/>)
            })}
          </div>
        </div>
      </div>
    )
  }

}

export default App;
