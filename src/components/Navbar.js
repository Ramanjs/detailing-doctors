import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../assets/logo-no-bg.png'
import ham from '../assets/ham.png'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Navbar = ({ inView }) => {

  const [expand, setExpand] = useState(false)

  return (
    <div className="w-full flex flex-col sticky top-0 z-50">
      <div className="w-full flex flex-col space-y-2 sm:space-y-0 sm:flex-row justify-between items-center py-2 px-2 sm:px-16 bg-white text-secondary font-bold">
        <div className="flex items-center space-x-2"><AddIcCallIcon /> <span>Call Us +91-8851-766763</span></div>
        <div className="flex items-center space-x-2"><AccessTimeIcon /> <span>Tue - Sun | 10.00 AM To 07.00 PM </span></div>
        <div className="flex items-center space-x-2"><a href="https://www.facebook.com/profile.php?id=100088306002766"><FacebookIcon /></a> <a href="https://www.instagram.com/gotdetailings/"><InstagramIcon /></a></div>
      </div>
      <div className="w-full flex items-center justify-between text-white py-2 px-4 bg-primary shadow-md shadow-secondary/40">
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
          <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/studios" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Book a Slot</NavLink></span>
          <span className="p-2" onClick={() => setExpand(false)}><NavLink to="/contact" className={({ isActive }) => isActive ? "underline decoration-secondary decoration-2 underline-offset-4" : ""}>Contact</NavLink></span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
