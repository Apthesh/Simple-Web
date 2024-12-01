// import React from 'react'
import { Link, Outlet } from 'react-router-dom' 
import "../css/navbar.css"

export default function Navbar() {
  return (
    <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/login">Login</Link>
    <Link to="/signup">Signup</Link>
    <Outlet/>
    </nav>
    
  )
}
