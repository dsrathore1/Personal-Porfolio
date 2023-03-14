import React, { useEffect } from 'react'
import './DevOpsStyle.css'
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';

const DevOps = () => {
    useEffect(() => {
        document.title = 'Portfolio (DevOps)';
    })
    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <ProjectBoxFile/>
            </div>
        </>
    )
}

export default DevOps