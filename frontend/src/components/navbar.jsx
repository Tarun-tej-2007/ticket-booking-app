import React from 'react'
import './navbar.css'
import bg1 from '../assets/bg1.jpg'   // ✅ import image

function Navbar() {
  return (
    <div 
      className='navbar'
      style={{ 
        backgroundImage: `url(${bg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100px",
        breadth: "100%"
      }}
    >
      <div className='title'>
        GoTickets
      </div>
      <div className='links'> 
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        <p>Login</p>
      </div>
    </div>
  )
}

export default Navbar
