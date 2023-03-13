import React, { useEffect } from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';


const Main = () => {
    useEffect(() => {
        document.title = 'Portfolio (Projects)';
    }, []);

    return (
        <>
            <Ellipse />
            <div className='h21'>
                <ProjectNav />
                <div className='mainPageContainer'>
                    <div className='headerNav'>
                        <ol className='hnList'>
                            <button className='allList all'>All</button>
                            <button className='allList minor'>Minor</button>
                            <button className='allList major'>Major</button>
                        </ol>
                    </div>
                </div>
                <ProjectBoxFile />
            </div>
        </>
    );
}

export default Main