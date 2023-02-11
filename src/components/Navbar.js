import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo-no-bg.png'
import ham from '../assets/ham.png'

const Navbar = ({ inView }) => {

  const [expand, setExpand] = useState(false)

  return (
    <div className="w-full flex items-center sticky top-0 justify-between text-white py-2 px-4 bg-primary shadow-md shadow-secondary/40 z-50">
      {inView ? <span></span> : (
        <NavLink to="/"><img className="w-20" src={logo} alt="logo"/></NavLink>
      )}
      <img className="w-8 h-4 sm:hidden mx-2 my-2 cursor-pointer" onClick={() => setExpand(!expand)} src={ham} alt="menu"/>
      <div className={`flex gap-4 md:flex` + (
        expand ?
          " absolute w-[50vw] h-[100vh] top-0 left-0 flex-col bg-primary justify-center items-center"
          : " hidden"
        )}>
        <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Home</NavLink></span>
        <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/products" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Products</NavLink></span>
        <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/studios" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Studios</NavLink></span>
        <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Contact</NavLink></span>
      </div>
    </div>
  )
}

export default Navbar
