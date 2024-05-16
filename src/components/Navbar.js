import React, { useState } from 'react'
import { useRef } from 'react'

import { HashLink } from 'react-router-hash-link'


// import Button from './helper-components/Button'

import './Navbar.css'

function Navbar() {

    const hamburgerRef = useRef(null)
    const [isVisible, setIsVisible] = useState(false)

    function clickHandler() {
        // setIsVisible(prev => !prev)
        // !isVisible ? hamburger.classList.add('clicked') : hamburger.classList.remove('clicked')

        setIsVisible(prev => !prev)
        hamburgerRef.current.classList.toggle('clicked')
    }

    const styles = {
        visibility: `${isVisible ? 'visible' : 'hidden'}`,
        transform: `${isVisible ? 'translateX(0vw)' : 'translateX(100vw'}`
    }

    return (
        <nav className='main-nav'>
            <div className="main-nav__logo">
                <img src="./assets/logo1.png" style={{ width: '100%', height: '100%' }} alt="" />
            </div>
            <div className="main-nav__list">
                <ul>
                    {/* <li><HashLink to='#home' smooth ><span>01.</span> Home</HashLink></li> */}

                    <li><HashLink to='#home' smooth>Home</HashLink></li>
                    <li><HashLink to='#about' smooth>About</HashLink></li>
                    <li><HashLink to='#services' smooth>Services</HashLink></li>
                    <li><HashLink to='#gallery' smooth>Gallery</HashLink></li>
                    <li><HashLink to='#contact' smooth>Contact</HashLink></li>
                    {/* <Navlinks href="/">Home</Navlinks>
                    <Navlinks href="/about">About</Navlinks>
                    <Navlinks href="/services">Services</Navlinks>
                    <Navlinks href="/gallery">Gallery</Navlinks>
                    <Navlinks href="/contact">Contact</Navlinks> */}
                    {/* <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/contact">Contact</a></li> */}
                </ul>
            </div>
            <div className='hamburger' ref={hamburgerRef} onClick={clickHandler}>
                <div className='line-1'></div>
                <div className='line-2'></div>
                <div className='line-3'></div>
            </div>
            <div className="hamburger-menu" style={styles}>
                <ul>
                    <li><HashLink to='#home' smooth>Home</HashLink></li>
                    <li><HashLink to='#about' smooth>About</HashLink></li>
                    <li><HashLink to='#services' smooth>Services</HashLink></li>
                    <li><HashLink to='#gallery' smooth>Gallery</HashLink></li>
                    <li><HashLink to='#contact' smooth>Contact</HashLink></li>
                </ul>
            </div>
        </nav>
    )
}


// function Navlinks({ href, children }) {

//     const path = window.location.pathname

//     return (
//         <li className={path === href ? 'active' : ''}>
//             <a href={href}>{children}</a>
//         </li>
//     )
// }

export default Navbar