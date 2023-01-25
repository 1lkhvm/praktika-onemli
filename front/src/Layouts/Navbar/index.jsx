import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.scss'

function Navbar() {
  return (
    <div className='Navbar'>
      <div className='nav-logo'>
        <Link className='Link' to={"/"}>
          Studio
        </Link>
      </div>
      <div className='nav-menu'>
        <ul>
          <li>
            <Link className={"Link"} to={"/Home"}>Home</Link>
            <Link className={"Link"} to={"/add"}>Add</Link>
            <Link className={"Link"} to={"/Portfolio"}>Portfolio</Link>
            <Link className={"Link"} to={"/About"}>About</Link>
            <Link className={"Link"} to={"/Team"}>Team</Link>
            <Link className={"Link"} to={"/Contact"}>Contact</Link>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar