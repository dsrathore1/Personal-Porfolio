import React, { useEffect } from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import { NavLink } from 'react-router-dom';


const Main = () => {
    useEffect(() => {
        document.title = 'Portfolio (Projects)';
    }, []);

    return (
        <>
            <Ellipse />
            <div className='h21'>
                <ProjectNav />
                <div className='mainPageContainer'>
                    <div className='headerNav'>
                        <ol className='hnList'>
                            <NavLink className='allList all' style={({ isActive }) => ({ backgroundColor: isActive ? "#ffffff1b" : "none" })}>All
                            </NavLink>
                            <NavLink className='allList minor' style={({ isActive }) => ({ backgroundColor: isActive ? "none" : "#ffffff1b" })}>Minor</NavLink>
                            <NavLink className='allList major' to="/projects" style={({ isActive }) => ({ backgroundColor: isActive ? "none" : "#ffffff1b" })}>Major</NavLink>
                        </ol>
                    </div>
                </div>
                <ProjectBoxFile />
            </div>
        </>
    );
}

export default Main