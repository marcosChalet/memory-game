import React, { useEffect, useState } from 'react'

import './style.css'

import Button from '../Button'

function ModalEndGame() {

  const [modal, setModal] = useState()

  useEffect(() => {
    setModal('show')
  }, [])
  
  function btnClick() {
    setModal('hide')
  }

  return (
    <div className={`modal ${modal} container`}>
      <div className='content'>
        <p>Você venceu!</p>
        <Button click={btnClick} text='X' classes='restart' />
      </div>
    </div>
  )
}

export default ModalEndGame