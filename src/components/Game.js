import React from 'react'

import ReactCursorPosition from 'react-cursor-position'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/Game.css'

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <Logo />
        <ReactCursorPosition>
          <GameScreen />
        </ReactCursorPosition>
        <AnswerScreen />
      </div>
    )
  }
}

export default Game
