import React, { useEffect } from 'react';
import './DevelopmentStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';


const Development = () => {
    useEffect(() => {
        document.title = 'Portfolio (Development)';
    }, []);
    
    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <h1>Development Section</h1>
            </div>
        </>
    )
}

export default Development