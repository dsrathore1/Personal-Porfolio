import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './ProjectNavStyle.css';
import Projects from "../../Components/ProjectBox/JSON/jsonFile.json";

const Nav = () => {
    const navigate = useNavigate();
    
    const [data, setData] = useState(Projects);
    const filterItems = (cateItem) => {
        setData(cateItem);
        navigate("/projects", { state: { data: data } })
    }
    return (
        <>
            <div className='navBar2'>
                <h2 className='logo2'>DS<br /><span className='RA'>RA</span></h2>
                <ol className='projectOL'>
                    <a href='/'>
                        <li className='projectList' >Home</li>
                    </a>
                    <NavLink to='/projects' onClick={() => (filterItems(data.map((ele) => { return console.log(ele.belong === "devOps" || ele.belong === "design" || ele.belong === "development") })))} style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Projects</li>
                    </NavLink>
                    <NavLink to='/design' onClick={() => {
                        filterItems(data.map((ele) => {
                            return console.log(
                                ele.belong === "design"
                            );
                        }));
                    }} style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Design</li>
                    </NavLink>
                    <NavLink to='/development' onClick={() => filterItems(data.map((ele) => {
                        return console.log(ele.belong === "development");
                    }))} style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>Development</li>
                    </NavLink>
                    <NavLink to='/devOps' onClick={() => filterItems(data.map((ele) => {
                        return console.log(ele.belong === "devOps");
                    }))} style={({ isActive }) => ({ backgroundColor: isActive ? "#5c5c5cd6" : "transparent" })}>
                        <li className='projectList'>DevOps</li>
                    </NavLink>
                </ol>
            </div>
        </>
    )
}

export default Nav