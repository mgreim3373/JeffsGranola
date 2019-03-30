import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {

  return (
    <div>
      <NavLink to="/">Logo</NavLink>
      <NavLink to="/Locations">Locations</NavLink>
    </div>
  )
}

export default Navigation
