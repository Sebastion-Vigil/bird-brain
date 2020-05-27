import React from 'react'
import ReactCursorPosition from 'react-cursor-position'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/Game.css'

class Game extends React.Component {

  state = {
    x: 0,
    y: 0
  }
  update = (newXY) => {
    console.log(newXY)
    this.setState({
      x: newXY[0],
      y: newXY[1]
    })
  }
  render() {
    return (
      <div className='game'>
        <Logo />
        <ReactCursorPosition>
          <GameScreen update={this.update} />
        </ReactCursorPosition>
        <AnswerScreen txt={`x: ` + this.state.x + ` y: ` + this.state.y} />
      </div>
    )
  }
}

export default Game
