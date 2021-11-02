import React from 'react'
import { Link } from 'react-router-dom'
import cocktail from '../image/cocktail.png'

const Home = () => {
  return (
    <section className="hero is-fullheight-with-navbar homepage">
      <div className="hero-body">
        <div className="container welcome-text">
          <div id="flex">
            <div className="image-border">
              <Link to="/cocktails">
                <img src={cocktail} alt="" className="glass" />
              </Link>
            </div>
            <h1 className=" is-1 has-text-centered drinkard">
              <span id="span">D</span>RINKAR<span id="span">D</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
