import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo-no-bg.png'

const Navbar = ({ inView }) => {
  return (
    <div className="w-full flex items-center sticky top-0 justify-between text-white py-2 px-4 bg-primary shadow-md shadow-secondary/40 z-50">
      {inView ? <span></span> : (
        <NavLink to="/"><img className="w-20 hidden sm:block" src={logo} alt="logo"/></NavLink>
      )}
      <div className="flex gap-4">
        <span className="p-2"><NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Home</NavLink></span>
        <span className="p-2"><NavLink to="/products" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Products</NavLink></span>
        <span className="p-2"><NavLink to="/studios" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Studios</NavLink></span>
        {/*<a className="p-2"><NavLink to="/franchise" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Franchise</NavLink></a>*/}
        <span className="p-2"><NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Contact</NavLink></span>
      </div>
    </div>
  )
}

export default Navbar
