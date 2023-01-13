import './style.css'

function Button( {click, classes='', children} ) {
  const btnClasses = `btn ${classes}`
  return (
    <button onClick={click} className={btnClasses}> {children} </button>
  )
}

export default Button