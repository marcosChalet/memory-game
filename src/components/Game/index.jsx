import './style.css'
import { useState } from 'react'

import ModalEndGame from '../template/ModalEndGame'
import CardGame from '../template/CardGame'

import angular    from '@/angular.svg'
import node       from '@/node.svg'
import python     from '@/python.svg'
import react      from '@/react.svg'
import vscode     from '@/vscode.svg'
import vue        from '@/vue.svg'
import typescript from '@/typescript.svg'
import mongodb    from '@/mongodb.svg'

const images = [
  {id: 1,  key: 1, src: angular,    active: false},
  {id: 2,  key: 1, src: angular,    active: false},
  {id: 3,  key: 2, src: node,       active: false},
  {id: 4,  key: 2, src: node,       active: false},
  {id: 5,  key: 3, src: python,     active: false},
  {id: 6,  key: 3, src: python,     active: false},
  {id: 7,  key: 4, src: react,      active: false},
  {id: 8,  key: 4, src: react,      active: false},
  {id: 9,  key: 5, src: vscode,     active: false},
  {id: 10, key: 5, src: vscode,     active: false},
  {id: 11, key: 6, src: vue,        active: false},
  {id: 12, key: 6, src: vue,        active: false},
  {id: 13, key: 7, src: typescript, active: false},
  {id: 14, key: 7, src: typescript, active: false},
  {id: 15, key: 8, src: mongodb,    active: false},
  {id: 16, key: 8, src: mongodb,    active: false},
]

function Game({ numCards }) {

  const [endGame, setEndGame] = useState(false)

  let cards = []
  for (let i = 0; i < numCards; i++) {
    cards.push(images[i])
  }
  cards.sort(() => Math.random() - 0.5)

  let cardsToCompare = []
  let countCards = 0
  let stopTime = false
  let totalActive = 0

  function click(cardActive, setCardActive, key) {
    if ( !cardActive && !stopTime ) {
      setCardActive(true)
      countCards++
      totalActive++
      cardsToCompare.push({cardActive, setCardActive, key})
      
      if (countCards === 2) {
        stopTime = true
        countCards = 0
        
        if (cardsToCompare[0].key !== cardsToCompare[1].key) {
          setTimeout(() => {
            if (cardsToCompare[0].key !== cardsToCompare[1].key) {
              cardsToCompare[0].setCardActive(false)
              cardsToCompare[1].setCardActive(false)
              totalActive -= 2
            }
            cardsToCompare.pop()
            cardsToCompare.pop()
            stopTime = false
          }, 1800);
        } else {
          cardsToCompare.pop()
          cardsToCompare.pop()
          stopTime = false

          if (totalActive === cards.length) {
            setEndGame(true)
          }
        }
      }
    }
  }

  return (
    <div className='container'>
      <h1 className='title'>Memory Game</h1>
      <div className='cards'>
        {cards.map((card) => {
          return (
            <CardGame 
              key={card.id}
              faceImgCard={card}
              click={click}
            />
          )
        })}
        { endGame && <ModalEndGame><h1>Você venceu!</h1></ModalEndGame> }
      </div>
    </div>
  )
}

export default Game
