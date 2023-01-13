import './style.css'
import { useEffect, useState } from 'react'

import { MdClose } from 'react-icons/md';
import Button from '../Button'

function ModalEndGame({ children }) {

  const [modal, setModal] = useState()

  useEffect(() => {
    setModal('show')
  }, [])
  
  function btnClick() {
    setModal('hide')
    window.location.reload();
  }

  return (
    <div className={`modal ${modal} container`}>
      <div className='content'>
        { children }
        <Button click={btnClick} text='' classes='restart'>
          <MdClose size={30} color="#F22" />
        </Button>
      </div>
    </div>
  )
}

export default ModalEndGame