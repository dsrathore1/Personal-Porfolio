import React, { useEffect } from 'react';
import './DevelopmentStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import HeaderNav from '../../../Components/HeaderNav/headerNav';

const Development = () => {
    useEffect(() => {
        document.title = 'Portfolio (Development)';
    }, []);

    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <div className='mainPageContainer'>
                    <HeaderNav num1="Full-Stack" num2="Backend" num3="Frontend" />
                </div>
                <ProjectBoxFile />
            </div>
        </>
    )
}

export default Development