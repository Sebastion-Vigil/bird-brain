import React from 'react'
import Draggable from 'react-draggable'

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
    deltaPosition: {
      x: 0,
      y: 0
    },
    tileLandingBackgrounds: [
        'silver',
        'silver',
        'silver',
        'silver'
    ],
    dropPadY: [
        [69, 71],
        [34, 36],
        [-1, -3],
        [-36, -38],
        [-71, -73],
        [-106, -108],
        [-141, -143],
        [-176, -178]
    ]
  }

  handleDrag = (e, ui, z) => {
    const { x, y } = this.state.deltaPosition
    const landings = JSON.parse(JSON.stringify(this.state.tileLandingBackgrounds))
    console.log('x, y: ', x, y)
    if (x > -148 && x < -144) {
        if (y > 69 && y < 71) {
            landings[0] = 'green'
        } else {
            landings[0] = 'silver'
        }
        if (y > 105 && y < 107) {
            landings[1] = 'green'
        } else {
            landings[1] = 'silver'
        }
        if (y > 141 && y < 143) {
            landings[2] = 'green'
        } else {
            landings[2] = 'silver'
        }
        if (y > 177 && y < 179) {
            landings[3] = 'green'
        } else {
            landings[3] = 'silver'
        }
    } 
    this.setState({
      tileLandingBackgrounds: landings,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  render () {
    return (
      <div className='game-screen'>
        <div className='food-quizz'>
          <div className='text'>What comes on a BLTA Croissant?</div>
          <div className='hint top'></div>
          <div style={{
              backgroundColor: this.state.tileLandingBackgrounds[0]
          }} className='ingredient-landing'></div>
          <div style={{
              backgroundColor: this.state.tileLandingBackgrounds[1]
          }} className='ingredient-landing'></div>
          <div style={{
              backgroundColor: this.state.tileLandingBackgrounds[2]
          }} className='ingredient-landing'></div>
          <div style={{
              backgroundColor: this.state.tileLandingBackgrounds[3]
          }} className='ingredient-landing'></div>
          <div className='hint bottom'></div>
          <div className='text'>Drag correct ingredients, in order.</div>
        </div>
        <div className='ingredients'>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + pickles + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + lettuce + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + egg + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + bacon + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + onions + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + cheese + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + avocado + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} >
            <div
              style={{
                backgroundImage: 'url(' + tomato + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
            ></div>
          </Draggable>
        </div>
      </div>
    )
  }
}

export default GameScreen
