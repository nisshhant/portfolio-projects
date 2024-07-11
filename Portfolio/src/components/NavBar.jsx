import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
    <div id = "Navbar" className='flex flex-row font-mono'>
        <div><button className='p-4 hover:border hover:border-black'>Nishant Paliwal</button></div>
        <div><button className='p-4 hover:border hover:border-black'>About</button></div>
        <div><button className='p-4 hover:border hover:border-black'>Experience</button></div>
        <div><button className='p-4 hover:border hover:border-black'>Project</button></div>
        <div><button className='p-4 hover:border hover:border-black'>Contact</button></div>
    </div>
  )
}

export default NavBar;