import React from 'react'
import ReactCursorPosition from 'react-cursor-position'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/Game.css'

class Game extends React.Component {

  state = {
    message: 'game start'
  }
  update = (msg) => {
    this.setState({
      message: msg
    })
  }
  render() {
    return (
      <div className='game'>
        <Logo />
        <ReactCursorPosition>
          <GameScreen update={this.update} />
        </ReactCursorPosition>
        <AnswerScreen txt={this.state.message} />
      </div>
    )
  }
}

export default Game