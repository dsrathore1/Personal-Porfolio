import React, { useEffect } from 'react';
import './DevelopmentStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';


const Development = () => {
    useEffect(() => {
        document.title = 'Portfolio (Development)';
    }, []);

    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <ProjectBoxFile />
            </div>
        </>
    )
}

export default Development