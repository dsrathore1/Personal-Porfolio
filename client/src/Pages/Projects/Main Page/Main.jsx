import React from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';


const Main = () => {
    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
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
            </div>
        </>
    )
}

export default Main