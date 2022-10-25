import React from 'react';
import './ComingSoonStyle.css';



const ComingSoon = () => {
    return (
        <>
            <div className='mainComingSoongContainer'>
                <div className='csNavTop'>
                    <span className='csLogo'>| D<span className='s'>S</span> |</span>
                    <button className='csHamburger'>
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </button>
                </div>

                <h1 className='csTitle'>Coming Soon</h1>
                <span className='csPara'>GET NOTIFIED WHEN IT’S READY</span>
                <div className='notifyArea'>
                    <input className='csInput' placeholder='ENTER YOUR NAME' />
                    <button className='notifyBtn'>NOTIFY ME</button>
                </div>
            </div>
        </>
    )
}

export default ComingSoon