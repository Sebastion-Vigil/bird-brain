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
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + pickles + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + bacon + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + lettuce + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + egg + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + tomato + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + onions + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + cheese + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
                  <div draggable='true' style={{
                      backgroundImage: 'url(' + avocado + ')',
                      backgroundSize: '100% 100%'
                  }} class='ingredient'></div>
              </div>
            </div>
        )
    }
}

export default GameScreen