import React from 'react'
import { useState } from 'react'

import './style.css'

import coverImg from '../../../assets/linux.svg'

function Card( { image, activeCard, setActiveCard } ) {

  const [card, setCard] = useState({
    img: coverImg,
    classes: '',
    active: false,
    key: image.key,
  })

  const changeImage = _ => {
    if (card.active === true || activeCard.totalActive === 2) {
      return
    }

    card.active = true
    image.active = true

    let currActive = activeCard.totalActive + 1
    let currCards = activeCard.cards
    let keyCard = activeCard.keys
    let images = activeCard.cardImage

    currCards.push(setCard)
    keyCard.push(image.key)
    images.push(image.src)

    setActiveCard({
      totalActive: currActive,
      cards: currCards,
      keys: keyCard,
      cardImage: images,
    })

    setCard({
      img: image.src,
      classes: 'animate',
    })
  }

  return (
    <div className={`card ${card.classes}`}>
      <img
        className={card.classes}
        src={card.img}
        onClick={changeImage}
      />
    </div>
  )
}

export default Card