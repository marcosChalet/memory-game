import './style.css'
import { useState } from 'react'

import coverImg from '@/linux.svg'

import Card from '../Card'

function CardGame({ click, faceImgCard }) {

  const [cardActive, setCardActive] = useState(false)
  
  return (
    <div
      onClick={(() => click(cardActive, setCardActive, faceImgCard.key))}
    >
      <Card 
        img={cardActive ? faceImgCard.src : coverImg}
        imgClasses={cardActive ? 'animate' : ''}
        cardClasses={cardActive ? 'card-game animate' : 'card-game'}
      />
    </div>
  )
}

export default CardGame
