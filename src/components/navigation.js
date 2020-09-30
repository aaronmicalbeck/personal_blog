import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const navLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Login',
        path: '/login'
    }
]


export default function Navigation({ user }) {
    const [menuActive, setMenuActive] = useState(false);

    


    return (
        <nav className="site-navigation">

            <span className="menu-title">Responsive Nav Menu</span>
            <div className={`menu-content-container ${menuActive && 'active'}`}>
            
                <ul>
               
                    {navLinks.map((link, index) => (
                        <li onClick={()=> setMenuActive(!menuActive)} key={index}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>



                    ))}

                        <li>
                            <i className="ionicons icon ion-ios-close" onClick={() => setMenuActive(!menuActive)}/> 
                        </li>

                          
                </ul>
                  
                <span className="menu-avatar-container">
                    <span className="menu-avatar-name">{user.firstName} {user.lastName}</span>
                </span>

            </div>
            <i className="ionicons icon ion-ios-menu" onClick={() => setMenuActive(!menuActive)} />
        </nav>

    )
}