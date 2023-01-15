import './App.css'

import Game from '../components/Game'
import Home from '../components/Home'
import { useState } from 'react'

function App() {

  const [startPlay, setStartPlay] = useState({
    numCards: 0,
    run: false,
  })

  return (
    <div className='App'>
      { !startPlay.run && <Home setStartPlay={setStartPlay} /> }
      { startPlay.run && <Game numCards={startPlay.numCards} /> }
    </div>
  )
}

export default App
