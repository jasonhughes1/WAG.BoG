import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'


const NavBar = () => {
  return(
    <div className='nav-bar'>
      <h1>WAG.BoG</h1>
      <NavLink className='nav' to='/'>Home</NavLink>
      <NavLink className='nav' to='/search'>Search</NavLink>
      <NavLink className='nav' to='/map'>Map</NavLink>
    </div>
  )
}


export default NavBar;
