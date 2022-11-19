import React from 'react'
import './DesignStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';


const Design = () => {
    return (
        <>
        <Ellipse/>
            <div className='projectContainer'>
                <ProjectNav />
                <h1>Design Section</h1>
            </div>
        </>
    )
}

export default Design