import React from 'react'
import { Link } from 'react-router-dom'

import { FaHome, FaGlassMartiniAlt } from 'react-icons/fa'


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container-navbar">
          <Link to="/" >
            <FaHome className="left"/>
          </Link>
          <div className="navbar-start">
            <Link to="/cocktails" >
              <FaGlassMartiniAlt className="left2"/>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar
