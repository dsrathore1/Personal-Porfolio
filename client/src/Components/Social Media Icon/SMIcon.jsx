import React from 'react'
import './SMIconStyle.css'
import insta from "../Assets/insta.png"
import linkedin from "../Assets/linkedin.png"
import github from "../Assets/github.png"
import twitter from "../Assets/twitter.png"

const SMIcon = () => {
    return (
        <>
            <ol className='SocialMediaList2'>
                <li className='sMList'><a href='https://github.com/dsrathore1'>
                    <img className='sMImg' src={github} alt='#' />
                </a></li>
                <li className='sMList'><a href='https://www.linkedin.com/in/dsrathore1'>
                    <img className='sMImg' src={linkedin} alt='#' />
                </a></li>
                <li className='sMList'><a href='https://www.twitter.com/WFarmous'>
                    <img className='sMImg' src={twitter} alt='#' />
                </a></li>
                <li className='sMList'><a href='#https://www.instagram.com/amblent_photographer'>
                    <img className='sMImg' src={insta} alt='#' />
                </a></li>
            </ol>
        </>
    )
}

export default SMIcon