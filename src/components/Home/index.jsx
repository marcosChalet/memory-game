import './style.css'
import { useState } from 'react'

import Card from '../template/Card'

function Home({ setStartPlay }) {

  const optNumCards = [8, 12, 16]
  const [titleClassses, setTitleClassses] = useState('warningTitle')
  const [selected, setSelected] = useState({
    opt8:  false,
    opt12: false,
    opt16: false,
    total: 0,
  })

  function selectDificulty(id) {
    setSelected({
      opt8:  false,
      opt12: false,
      opt16: false,
      total: id,
    })
    
    setSelected(prev => {
      return {...prev, [`opt${id}`]: !selected[`opt${id}`]}
    })
  }

  function startGame(total) {
    if (!selected.opt8 && !selected.opt12 && !selected.opt16) {
      setTitleClassses('warningTitle titleError')
      setTimeout(() => {
        setTitleClassses('warningTitle')
      }, 3500);
    } else {
      setStartPlay({
        numCards: total,
        run: true,
      })
    }
  }

  return (
    <nav className='homeContainer'>
      <h1 className={ titleClassses }>Escolha</h1>
      <Card 
        cardClasses="homeCard start"
        click={() => startGame(selected.total)}
      >
        <h2>Start</h2>
      </Card>

      {optNumCards.map((numCards) => {
        return (
          <Card
            key={numCards}
            cardClasses={selected[`opt${numCards}`] ? `homeCard opt opt${numCards} active` : `homeCard opt opt${numCards}`} 
            click={() => selectDificulty(numCards)}
          >
            <h3>{numCards} cards</h3>
          </Card>
        )
      })}
    </nav>
  )
}

export default Home