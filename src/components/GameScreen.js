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
    message: 'game active',
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    },
    tileLandingBackgrounds: ['silver', 'silver', 'silver', 'silver'],
    yMinMax: [
      [65, 104],
      [108, 146],
      [152, 190],
      [194, 234]
    ],
    dropPadImages: [
      pickles,
      lettuce,
      egg,
      bacon,
      onions,
      cheese,
      avocado,
      tomato
    ],
    dropped: ['', '', '', ''], // images to go onto dropPad
    dropPadFull: [false, false, false, false], // is that space already occupied by another tile?
    full: 0, // getting messy => when this hits four I know the dropPad is full
    tileVisibility: [
      'visible',
      'visible',
      'visible',
      'visible',
      'visible',
      'visible',
      'visible',
      'visible'
    ]
  }
  
  onStart = () => {
    let updatedActiveDrags = this.state.activeDrags
    updatedActiveDrags += 1
    this.setState({ activeDrags: updatedActiveDrags })
  }

  onStop = (e, ui) => {
    // console.log(ui.node)
    // edge case => check if tile already down
    this.checkWinOrLose()
    let updatedActiveDrags = this.state.activeDrags
    updatedActiveDrags -= 1
    const dropPadImgIndex = parseInt(ui.node.id)
    const cursorX = this.props.position.x
    const cursorY = this.props.position.y
    const yMinMax = this.state.yMinMax
    const dropped = JSON.parse(JSON.stringify(this.state.dropped))
    const visibility = JSON.parse(JSON.stringify(this.state.tileVisibility))
    const dropPadFull = JSON.parse(JSON.stringify(this.state.dropPadFull))
    let full = this.state.full
    if (cursorX > 47 && cursorX < 144) {
      for (let i = 0; i < 4; i++) { // i here accesses drop pad positions
        if (cursorY > yMinMax[i][0] && cursorY < yMinMax[i][1]) {
          // add conditional logic here => determine if tile already dropped
          // also need to add logic to determine if pad full & check if winner/loser
          if (!dropPadFull[i]) {
            dropped[i] = this.state.dropPadImages[dropPadImgIndex]
            visibility[dropPadImgIndex] = 'hidden'
            dropPadFull[i] = true
            full += 1
            if (full === 4) {
              this.detectDropPadFull()
            }
          }
        }
      }
    }
    this.props.update(this.state.message)
    this.checkWinOrLose()
    this.setState({
      activeDrags: updatedActiveDrags,
      dropped: dropped,
      tileVisibility: visibility,
      dropPadFull: dropPadFull,
      full: full
    })
  }

  detectDropPadFull = () => {
    this.setState({
      message: 'drop pad full'
    })
  }

  handleDrag = (e, ui) => {
    const { x, y } = this.state.deltaPosition // object destructuring
    this.detectOverDropPad()
    this.setState({
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  detectOverDropPad = () => {
    const landings = JSON.parse(
      JSON.stringify(this.state.tileLandingBackgrounds)
    )
    const cursorX = this.props.position.x
    const cursorY = this.props.position.y
    const yMinMax = this.state.yMinMax
    if (cursorX > 47 && cursorX < 144) {
      for (let i = 0; i < 4; i++) {
        if (cursorY > yMinMax[i][0] && cursorY < yMinMax[i][1]) {
          landings[i] = 'gold'
        } else {
          landings[i] = 'silver'
        }
      }
    }
    this.setState({
      tileLandingBackgrounds: landings
    })
  }

  checkWinOrLose = () => {
    const dropped = JSON.parse(JSON.stringify(this.state.dropped))
    
    console.log(dropped)
  }

  // Jesus is LORD
  render () {
    // refactor! 
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop }
    return (
      <div className='game-screen'>
        <div className='food-quizz'>
          <div className='text'>What comes on a BLTA Croissant?</div>
          <div className='hint top'></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[0],
              backgroundImage: `url(` + this.state.dropped[0] + `)`,
              backgroundSize: '100% 100%'
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[1],
              backgroundImage: `url(` + this.state.dropped[1] + `)`,
              backgroundSize: '100% 100%'
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[2],
              backgroundImage: `url(` + this.state.dropped[2] + `)`,
              backgroundSize: '100% 100%'
            }}
            className='ingredient-landing'
          ></div>
          <div
            style={{
              backgroundColor: this.state.tileLandingBackgrounds[3],
              backgroundImage: `url(` + this.state.dropped[3] + `)`,
              backgroundSize: '100% 100%'
            }}
            className='ingredient-landing'
          ></div>
          <div className='hint bottom'></div>
          <div className='text'>Drag correct ingredients, in order.</div>
        </div>
        <div className='ingredients'>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + pickles + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[0]
              }}
              className='ingredient'
              id='0'
              onClick={this.handleDrop}
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + lettuce + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[1]
              }}
              className='ingredient'
              id='1'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + egg + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[2]
              }}
              className='ingredient'
              id='2'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + bacon + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[3]
              }}
              className='ingredient'
              id='3'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + onions + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[4]
              }}
              className='ingredient'
              id='4'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + cheese + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[5]
              }}
              className='ingredient'
              id='5'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + avocado + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[6]
              }}
              className='ingredient'
              id='6'
            ></div>
          </Draggable>
          <Draggable onDrag={this.handleDrag} {...dragHandlers}>
            <div
              style={{
                backgroundImage: 'url(' + tomato + ')',
                backgroundSize: '100% 100%',
                visibility: this.state.tileVisibility[7]
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