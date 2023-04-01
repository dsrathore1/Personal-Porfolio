import React, { useEffect } from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import HeaderNav from '../../../Components/HeaderNav/headerNav';
import { useLocation } from 'react-router-dom';

const Main = () => {
    useEffect(() => {
        document.title = 'Portfolio (Projects)';
    }, []);

    const location = useLocation();

    return (
        <>
            <Ellipse />
            <div className='h21'>
                <ProjectNav />
                <div className='mainPageContainer'>
                    <HeaderNav num1="All" num2="Minor" num3="Major" />
                </div>
                <ProjectBoxFile data={location.state.data} />
            </div>
        </>
    );
}

export default Main