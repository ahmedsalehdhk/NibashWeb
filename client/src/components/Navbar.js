import React from 'react'
import PrimaryButton from './PrimaryButton'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div className='nav flex justify-between items-center px-10 py-5 font-semibold absolute w-screen top-0 left-0'>
        <div className="left flex gap-20">
            <div className="logo">
              <Logo />
            </div>
            <div className="nav-links flex items-center gap-8">
                <a href="/">Home</a>
                <a href="/">Product</a>
                <a href="/">Features</a>
                <a href="/">Contact</a>
            </div>
        </div>
        <div className="right">
            <PrimaryButton text="get free access" />
        </div>
    </div>
  )
}
