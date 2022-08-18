import React from 'react'
import { NavLink } from 'react-router-dom'

const Index = ():JSX.Element => {
  return (
    <div>
        <NavLink className="a" to="/login"> Ir  inicio </NavLink>
    </div>
  )
}

export default Index