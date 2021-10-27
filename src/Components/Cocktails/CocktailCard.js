import React from 'react'
import { Link } from 'react-router-dom'

const CocktailCard = ({ idDrink, strDrink, strDrinkThumb }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet cocktail-image">
      <Link to={`/cocktails/${idDrink}`}>
        <div className="card">
          <div className="card-header">
            <div className="card-header-title" id="centre">
              {strDrink}
            </div>
          </div>
          <div className="card-image is-rounded image-div">
            <figure className="image image-is-1by1 figure-tag img-hover-zoom img-hover-zoom--colorize">
              <img className="mega" src={strDrinkThumb} alt="" />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CocktailCard
