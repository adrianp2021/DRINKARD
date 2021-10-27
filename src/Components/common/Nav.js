import React from 'react'
import { Link } from 'react-router-dom'

import { FaCocktail } from 'react-icons/fa'
import { FiHome } from 'react-icons/fi'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-navbar">
          <Link to="/" >
            <div className="left">
              <FiHome />
            </div>
          </Link>
          <div className="navbar-start">
            <Link to="/cocktails" >
              <div className="left">
                <FaCocktail />
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
