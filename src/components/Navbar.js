import React from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav className="navbar">
      <div className="container">
        <Link className="brand-logo" to="/">Hello World !</Link>
      </div>
    </nav> 
  )
}

export default Navbar