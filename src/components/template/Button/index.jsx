import React from 'react'

import './style.css'

function Button( {click, text='', classes='', figure=''} ) {
  const btnClasses = `btn ${classes}`
  return (
    <button onClick={click} className={btnClasses}> {figure}{text} </button>
  )
}

export default Button