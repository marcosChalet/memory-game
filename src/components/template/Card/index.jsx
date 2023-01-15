import './style.css'

function Card({ children, img, cardClasses='', imgClasses='', click }) {

  cardClasses += ' card'

  return (
    <div 
      className={cardClasses}
      onClick={() => click && click()}
    >
      {img && <img className={imgClasses} src={img} />}
      { children }
    </div>
  )
}

export default Card