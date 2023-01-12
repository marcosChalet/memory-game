import React, { useEffect, useState } from 'react'

import './style.css'

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

import coverImg from '../../assets/linux.svg'

function Home() {

  const [activeCard, setActiveCard] = useState({
    totalActive: 0,
    cards: [],
    keys: [],
    cardImage: [],
  })

  const [endGame, setEndGame] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log(activeCard.totalActive)
      if (activeCard.totalActive === 2 && activeCard.keys[0] === activeCard.keys[1]) {  
        activeCard.cards[0]({
          img: activeCard.cardImage[0],
          classes: 'animate',
          active: true,
        })

        activeCard.cards[1]({
          img: activeCard.cardImage[1],
          classes: 'animate',
          active: true,
        })

        setActiveCard({
          totalActive: 0,
          cards: [],
          keys: [],
          cardImage: [],
        })

        const total = images.filter((img) => img.active).length
      
        if (total === 12) {
          setEndGame(true)
        }
        
      }else if (activeCard.totalActive === 2) {
        activeCard.cards[0]({
          img: coverImg,
          classes: '',
          active: false,
        })
        activeCard.cards[1]({
          img: coverImg,
          classes: '',
          active: false,
        })
        setActiveCard({
          totalActive: 0,
          cards: [],
          keys: [],
          cardImage: [],
        })
      }
    }, 2000);

    return () => {
      clearTimeout(timer)
    }
  }, [activeCard])

  useEffect(() => {
    images.map(image => image.active = false)
  }, [endGame])

  return (
    <div className="container">
      <h1 className='title'>Memory Game</h1>
      <div className='cards'>
        {images.map((image) => {
          return (
            <Card key={image.id} image={image}
              activeCard={activeCard}
              setActiveCard={setActiveCard} 
            />
          )
        })}

        { endGame && <ModalEndGame /> }
      </div>
    </div>
  )
}

export default Home