import React, { useEffect } from 'react'
import './DesignStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';


const Design = () => {
    useEffect(() => {
        document.title = 'Portfolio (Design)';
    }, []);

    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <h1>Design Section</h1>
            </div>
        </>
    )
}

export default Design