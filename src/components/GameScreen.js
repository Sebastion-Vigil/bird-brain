import React from 'react'

import '../css/GameScreen.css'

class GameScreen extends React.Component {
    render() {
        return (
            <div className='game-screen'>
              <div className='food-quizz'></div>
              <div className='ingredients'>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
                  <div class='ingredient'></div>
              </div>
            </div>
        )
    }
}

export default GameScreen