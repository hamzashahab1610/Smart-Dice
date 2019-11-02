import React, { Component } from 'react'
import Die from './Die'
import './Diceroll.css'

export default class DiceRoll extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  };

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      isRolling: false,
    }
    //this.roll = this.roll.bind(this);
  }
  
  roll = () => {
    //Picking 2 new rolls
    const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    //Setting State with new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
      isRolling: true,
    })

    //set timeout
    setTimeout(() => {
      this.setState({isRolling: false})
    },999)
  }

  render() {
    return (
      <div className='RollDice'>
        <div className="RollDice-container">
          <Die face={this.state.die1} rolling={this.state.isRolling}/>
          <Die face={this.state.die2} rolling={this.state.isRolling}/>
        </div>        
        <button onClick={this.roll} disabled={this.state.isRolling}>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice !'}
        </button>
      </div>
    )
  }
}
