// import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Products() {
  return (
    <div>
        <h1>Products</h1>
        <nav>
            <Link to="mobiles">Mobile</Link>
            <Link to="laptops">laptops</Link>
            <Link to="watches">Watches</Link>
            <Link to="fashion">Fashion</Link>
        </nav>
        <Outlet/>
    </div>
  )
}
