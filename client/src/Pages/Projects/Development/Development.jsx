import React from 'react';
import './DevelopmentStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';


const Development = () => {
    return (
        <>
        <Ellipse/>
            <div className='projectContainer'>
                <ProjectNav />
                <h1>Development Section</h1>
            </div>
        </>
    )
}

export default Development