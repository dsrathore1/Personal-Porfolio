import React from 'react'
import { NavLink } from 'react-router-dom'
import './ProjectNavStyle.css';

const Nav = () => {
    return (
        <>
            <div className='navBar2'>
                <h2 className='logo2'>DS<br /><span className='RA'>RA</span></h2>
                <ol className='projectOL'>
                    <a href='/'>
                        <li className='projectList' >Home</li>
                    </a>
                    <NavLink to='/projects' style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Projects</li>
                    </NavLink>
                    <NavLink to='/design' style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Design</li>
                    </NavLink>
                    <NavLink to='/development' style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Development</li>
                    </NavLink>
                    <NavLink to='/devOps' style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>DevOps</li>
                    </NavLink>
                </ol>
            </div>
        </>
    )
}

export default Nav