import React, { useEffect } from 'react'
import './DesignStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';

const Design = () => {
    useEffect(() => {
        document.title = 'Portfolio (Design)';
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

export default Design