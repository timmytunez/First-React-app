import React from 'react'
import './nav.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <div className='first'>
            <img src="./assets/schooled.png" alt="" className='logo'/>
        </div>

        <div className='second'>
            <a href="https://cdnjs.com/libraries/font-awesome" className='navlinks'>Home</a>
            <a href="https://cdnjs.com/libraries/font-awesome" className='navlinks'>About</a>
            <a href="https://cdnjs.com/libraries/font-awesome" className='navlinks'>Services</a>
            <a href="https://cdnjs.com/libraries/font-awesome" className='navlinks'>Testimonial</a>
            <a href="https://cdnjs.com/libraries/font-awesome" className='navlinks'>Contact</a>
        </div>

        <div className='third'>
            <i className="fa-solid fa-phone navicons"></i>
            <i className="fa-solid fa-envelope navicons"></i>
            <i className="fa-brands fa-github navicons"></i>
            <i className="fa-brands fa-linkedin navicons"></i>
        </div>
    </div>
  )
}

export default Nav