import React from 'react'

import Logo from './Logo.js'
import GameScreen from './GameScreen.js'
import AnswerScreen from './AnswerScreen.js'

import '../css/Game.css'

class Game extends React.Component {
  render () {
    return (
      <div className='game'>
        <Logo />
        <GameScreen />
        <AnswerScreen />
      </div>
    )
  }
}

export default Game
