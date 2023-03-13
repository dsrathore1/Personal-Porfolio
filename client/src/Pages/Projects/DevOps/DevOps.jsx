import React, { useEffect } from 'react'
import './DevOpsStyle.css'
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';

const DevOps = () => {
    useEffect(() => {
        document.title = 'Portfolio (DevOps)';
    })
    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <h1>DevOps Section</h1>
            </div>
        </>
    )
}

export default DevOps