import './style.css'
import { useState } from 'react'

import coverImg from '../../../assets/linux.svg'

function Card({ click, faceImgCard }) {

  const [cardActive, setCardActive] = useState(false)
  
  return (
    <div className={cardActive ? 'card animate' : 'card'}>
      <img
        className={cardActive ? 'animate' : ''}
        src={cardActive ? faceImgCard.src : coverImg}
        onClick={(
          () => click(cardActive, 
            setCardActive,
            faceImgCard.key)
        )}
      />
    </div>
  )
}

export default Card