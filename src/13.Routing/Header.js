import React from 'react'

import './style.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
      <div className='header'>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/profile" >Profile</NavLink>
      <NavLink to="/contact" style={({ isActive }) => {
        return isActive ? {color: 'red'}: null
      }}>Contact</NavLink>
      <NavLink to="/products">Products</NavLink>
      </div>
  )
}

export default Header