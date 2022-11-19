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
                            <button className='allList'>All</button>
                            <button className='allList'>Minor</button>
                            <button className='allList'>Major</button>
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Main