import './style.css'
import { useState } from 'react'

import ModalEndGame from '../template/ModalEndGame'

import Card from '../template/Card'
import angular from '../../assets/angular.svg'
import node from '../../assets/node.svg'
import python from '../../assets/python.svg'
import react from '../../assets/react.svg'
import vscode from '../../assets/vscode.svg'
import vue from '../../assets/vue.svg'

const images = [
  {id: 1,  key: 1, src: angular, active: false},
  {id: 2,  key: 1, src: angular, active: false},
  {id: 3,  key: 2, src: node,    active: false},
  {id: 4,  key: 2, src: node,    active: false},
  {id: 5,  key: 3, src: python,  active: false},
  {id: 6,  key: 3, src: python,  active: false},
  {id: 7,  key: 4, src: react,   active: false},
  {id: 8,  key: 4, src: react,   active: false},
  {id: 9,  key: 5, src: vscode,  active: false},
  {id: 10, key: 5, src: vscode,  active: false},
  {id: 11, key: 6, src: vue,     active: false},
  {id: 12, key: 6, src: vue,     active: false},
].sort(() => Math.random() - 0.5)

function Home() {

  const [endGame, setEndGame] = useState(false)

  let cardsToCompare = []
  let count = 0
  let stopTime = false
  let totalActive = 0

  function click(cardActive, setCardActive, key) {
    
    if ( !cardActive && !stopTime ) {
      setCardActive(true)
      count++
      totalActive++
      cardsToCompare.push({cardActive, setCardActive, key})
      
      if (count === 2) {
        stopTime = true
        setTimeout(() => {
          count = 0
          if (cardsToCompare[0].key !== cardsToCompare[1].key) {
            cardsToCompare[0].setCardActive(false)
            cardsToCompare[1].setCardActive(false)
            totalActive -= 2
          }
          cardsToCompare.pop()
          cardsToCompare.pop()
          stopTime = false

          if (totalActive === images.length) {
            setEndGame(true)
          }
        }, 1800);
      }
    }
  }

  return (
    <div className="container">
      <h1 className='title'>Memory Game</h1>
      <div className='cards'>
        {images.map((image) => {
          return (
            <Card 
              key={image.id}
              faceImgCard={image}
              click={click}
            />
          )
        })}
        { endGame && <ModalEndGame><h1>Você venceu!</h1></ModalEndGame> }
      </div>
    </div>
  )
}

export default Home