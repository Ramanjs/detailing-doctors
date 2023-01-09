import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo-no-bg.png'

const Navbar = () => {
  return (
    <div className="w-full flex items-center sticky top-0 justify-between text-white py-2 px-4 bg-primary shadow-sm z-50">
      <img className="w-20" src={logo} alt="logo"/>
      <div className="flex gap-4">
        <a><NavLink to="/">Home</NavLink></a>
        <a><NavLink to="/products">Products and Services</NavLink></a>
        <a><NavLink>Studios</NavLink></a>
        <a><NavLink>Franchise</NavLink></a>
        <a><NavLink to="/contact">Contact Us</NavLink></a>
      </div>
    </div>
  )
}

export default Navbar
