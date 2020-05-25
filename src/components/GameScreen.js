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
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400, y: 200
    },
    tileLandingBackgrounds: ['silver', 'silver', 'silver', 'silver'],
    dropPadY: [
      // starting points for y min/max of each tile
      65, 30, 0, -35, -71, -106, -141, -176
    ]
  }
  
  onStart = () => {
    console.log('Started!')
    let updatedActiveDrags = this.state.activeDrags
    updatedActiveDrags += 1
    this.setState({activeDrags: updatedActiveDrags});
  };

  onStop = (e, ui) => {
    console.log('Stopped!')
    let updatedActiveDrags = this.state.activeDrags
    this.setState({activeDrags: updatedActiveDrags});
  };

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition  // object destructuring
    const landings = JSON.parse(JSON.stringify(this.state.tileLandingBackgrounds))
    const whichTile = parseInt(ui.node.id)
    const yMinMax = []
    let seed = this.state.dropPadY[whichTile]
    // console.log('x: ', x, 'y: ', y)
    for (let i = 0; i < 4; i++) {
      yMinMax.push([seed, seed + 7])
      seed += 37
    }
    if (x > -150 && x < -140) {
      for (let i = 0; i < yMinMax.length; i++) {
        if (y > yMinMax[i][0] && y < yMinMax[i][1]) {
          landings[i] = 'green'
        } else {
          landings[i] = 'silver'
        }
      }
    }
    this.props.update([x + ui.deltaX, y + ui.deltaY])
    this.setState({
      tileLandingBackgrounds: landings,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  render () {
    const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
    return (
      <div className='game-screen'>
        <div className='food-quizz'>
          <div className='text'>What comes on a BLTA Croissant?</div>
          <div className='hint top'></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[0]
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[1]
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[2]
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[3]
            }}
            className='ingredient-landing'
          ></div>
          <div className='hint bottom'></div>
          <div className='text'>Drag correct ingredients, in order.</div>
        </div>
        <div className='ingredients'>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + pickles + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='0'
              onClick={this.handleDrop}
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + lettuce + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='1'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + egg + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='2'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + bacon + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='3'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + onions + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='4'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + cheese + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='5'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + avocado + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='6'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers} >
            <div
              style={{
                backgroundImage: 'url(' + tomato + ')',
                backgroundSize: '100% 100%'
              }}
              className='ingredient'
              id='7'
            ></div>
          </Draggable>
        </div>
      </div>
    )
  }
}

export default GameScreen
