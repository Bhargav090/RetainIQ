import React from 'react'
import './navbar.css'
function Navbar() {
    const btnclicked = ()=>{
        alert("Published Successfully!!")
    }
  return (
    <div>
        <nav className="navbar">
            <a className="navbartxt" href="www">FashionFusion</a>
            <button className='btn' onClick={btnclicked}>
                Publish Feed
            </button>
        </nav>
    </div>
  )
}

export default Navbar