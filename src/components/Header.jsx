import React from 'react'
import '../Style.css'

function Header() {
  return (
    <div className='container' id='home'>
         <h4 className='logo'>Mupashir <span>developer</span></h4>
      <nav>

        <a href="#Bio" >Bio</a>
        <a href="#skills">Skills</a>
        <a href="#project">Projects</a>
        <a href="#about">About</a>
        <a href="#Contact">Contact</a>


      </nav>
    </div>
  )
}

export default Header
