import React from 'react'
import './NavigationStyle.css';
import homeIcon from "./assets/home.png";
import heartIcon from "./assets/heart.png";
import userIcon from "./assets/user.png";
import skillIcon from "./assets/skill.png";
import aboutIcon from "./assets/document.png";

const Navigation = () => {
    return (
        <>
            <div className='navigationContainer'>
                <div className='containNav'>
                    <a href='#home' className='iconBtn home1'>
                    <img className='icons' src={homeIcon} alt=''></img>
                    </a>
                    <a href='#about' className='iconBtn about'>
                    <img className='icons' src={aboutIcon} alt=''></img>
                    </a>
                    <a href='#works' className='iconBtn projects'>
                    <img className='icons' src={heartIcon} alt=''></img>
                    </a>
                    <a href='#skills' className='iconBtn skills'>
                    <img className='icons' src={skillIcon} alt=''></img>
                    </a>
                    <a href='#contactMe' className='iconBtn contact'>
                    <img className='icons' src={userIcon} alt=''></img>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Navigation