import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo-no-bg.png'

const Navbar = ({ inView }) => {
  return (
    <div className="w-full flex items-center sticky top-0 justify-between text-white py-2 px-4 bg-primary shadow-md shadow-secondary/40 z-50">
      {inView ? <span></span> : (
        <NavLink to="/"><img className="w-20" src={logo} alt="logo"/></NavLink>
      )}
      <div className="flex gap-4">
        <a className="p-2"><NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Home</NavLink></a>
        <a className="p-2"><NavLink to="/products" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Products and Services</NavLink></a>
        <a className="p-2"><NavLink to="/studios" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Studios</NavLink></a>
        <a className="p-2"><NavLink to="/franchise" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Franchise</NavLink></a>
        <a className="p-2"><NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Contact Us</NavLink></a>
      </div>
    </div>
  )
}

export default Navbar
