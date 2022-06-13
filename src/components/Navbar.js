import React, { useState} from 'react'
import './css/Navbar.css'
import { Link } from 'react-router-dom'
import logo from './../assets/logo.png'

export default function Navbar() {
    const [click, setClick]=useState(false)

    const handleClick = ()  => setClick(prev => !prev)
    const closeMobileMenu = ()  => setClick(prev => false)

    return (
        <>
            <nav className="navbar">
                {/* <Link o='/' className="navbar-logo">
                    EPIC
                </Link> */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item' className='nav-align'>
                        <Link to='/about' className="nav-links" onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item' className='nav-align'>
                        <Link to='/dashboard' className="nav-links" onClick={closeMobileMenu}>
                            Dashboard
                        </Link>
                    </li>
                    <li className='nav-item' className='nav-align'>
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-item' className='nav-align'>
                        <Link to='/contacts' className="nav-links" onClick={closeMobileMenu}>
                            Contacts
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            <img className='nav-logo' src={logo} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
