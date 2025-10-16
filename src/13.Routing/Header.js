import React from 'react'

import './style.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <div className='header'>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contact">Contact</Link>
      </div>
  )
}

export default Header