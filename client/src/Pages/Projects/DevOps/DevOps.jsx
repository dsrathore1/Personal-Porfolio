import React, { useEffect } from 'react'
import './DevOpsStyle.css'
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import HeaderNav from '../../../Components/HeaderNav/headerNav';

const DevOps = () => {
    useEffect(() => {
        document.title = 'Portfolio (DevOps)';
    })
    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <div className='mainPageContainer'>
                    <HeaderNav num1="All" num2="Minor" num3="Major" />
                </div>
                <ProjectBoxFile/>
            </div>
        </>
    )
}

export default DevOps