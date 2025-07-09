import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] =  useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    },[])


  return (
   <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
    <div className="inner">
        <a className='logo' href="#home">
        SOURAV PAL | Sourav's corner
        </a>
        <nav className="desktop">
        <ul>
           {navLinks.map((item) => (
            <li key={item.name} className='group'>
            <a href={item.link}>
            <span>{item.name}</span>
            <span className='underline'></span>
            </a>
                
            </li>
           ))}

        </ul>

        </nav>

        <a href='#contact' className='contact-btn group inline-block rounded-lg px-4 py-2 font-semibold text-sm sm:text-base  transition duration-300 shadow-md'>
        <div className="inner">
            Let's connect
        </div>

        </a>
    </div>
   </header>
  )
}

export default NavBar
