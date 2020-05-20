import React from 'react'

import '../css/GameScreen.css'

import lettuce from '../images/Lettuce.png'
import tomato from '../images/Tomato.png'
import bacon from '../images/Bacon.png'
import avocado from '../images/Avocado.png'
import pickles from '../images/Pickles.png'
import egg from '../images/Egg.png'
import onions from '../images/Onions.png'
import cheese from '../images/Cheese.png'

class GameScreen extends React.Component {
    
    state = {
        tileStyles: [
            {
                top: '5px',
                left: '200px'
            },
            {
                top: '36px',
                left: '200px'
            },
            {
                top: '68px',
                left: '200px'
            },
            {
                top: '100px',
                left: '200px'
            },
            {
                top: '132px',
                left: '200px'
            },
            {
                top: '164px',
                left: '200px'
            },
            {
                top: '196px',
                left: '200px'
            },
            {
                top: '228px',
                left: '200px'
            }
        ]
    }

    render() {
        return (
            <div className='game-screen'>
              <div className='food-quizz'>
                  <div className='text'>
                      What comes on a BLTA Croissant?
                  </div>
                  <div className='hint top'></div>
                  <div className='ingredient-landing'></div>
                  <div className='ingredient-landing'></div>
                  <div className='ingredient-landing'></div>
                  <div className='ingredient-landing'></div>
                  <div className='hint bottom'></div>
                  <div className='text'>
                      Drag correct ingredients, in order.
                  </div>
              </div>
              <div className='ingredients'>
                  <div style={{
                      backgroundImage: 'url(' + pickles + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[0].top,
                      left: this.state.tileStyles[0].left

                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + bacon + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[1].top,
                      left: this.state.tileStyles[1].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + lettuce + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[2].top,
                      left: this.state.tileStyles[2].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + egg + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[3].top,
                      left: this.state.tileStyles[3].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + tomato + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[4].top,
                      left: this.state.tileStyles[4].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + onions + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[5].top,
                      left: this.state.tileStyles[5].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + cheese + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[6].top,
                      left: this.state.tileStyles[6].left
                  }} class='ingredient'></div>
                  <div style={{
                      backgroundImage: 'url(' + avocado + ')',
                      backgroundSize: '100% 100%',
                      top: this.state.tileStyles[7].top,
                      left: this.state.tileStyles[7].left
                  }} class='ingredient'></div>
              </div>
            </div>
        )
    }
}

export default GameScreen