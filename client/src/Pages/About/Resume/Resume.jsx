import React from 'react';
import "./ResumeStyle.css";
import { BsDownload } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Show from "../../../Components/Assets/Show-case.svg";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { GrLinkedin, GrTwitter, GrInstagram, GrGithub, GrPinterest } from "react-icons/gr";

const Resume = () => {
    return (
        <>
            <div className='resumeContainer'>
                <div className='resumeNav'>
                    <div className='navLeft'>
                        <span className='resumeLogo'>DS<br /><span className='ra'>RA</span></span>
                        <ol className='resumeNavLinks'>
                            <Link to={"/"} className='resumeNavLink navHome'>Home</Link>
                            <Link to={"/projects"} className='resumeNavLink navProjects'>Proj<span className='ects'>ects</span></Link>
                        </ol>
                    </div>
                    <Link to={"/"} className='downloadResume'>Resume <BsDownload className='downloadResumeIcon' /></Link>
                </div>
                <div className='resumeDividend'>
                    <div className='resumeContainerLeft'>
                        <img className='showImg' src={Show} alt="show-case" />
                    </div>
                    <div className='resumeContainerRight'>
                        <h1 className='my-name'>Digpal Sin<span className='my-name2'>gh Rathore</span><div className='dot'></div></h1>
                        <p className='my-profession'>- DevOps Engineer</p>
                        <p className='about-me'>I've worked remotely for businesses and agencies since I started my career as a developer over 5 years ago. I've also completed various undergraduate projects, participated in a number of hackathons, and worked with amazing individuals online through GitHub. takes part in various open sources. I have a calm confidence, am naturally interested, am constantly attempting to improve my chaotic designs, and I also strive to solve DSA issues one at a time.</p>
                        <div className='experienceAndActivitiesDiv'>
                            <h1 className='eAADTitle'>Experience & Activities</h1>
                            <div className='show-tile'>
                                <div className='show-tile-heading'>
                                    <p className='show-tile-title'>Hacktoberfest Contribute</p>
                                    <div className='show-move-btn'>
                                        <button className='left-side-arrow arrow'><SlArrowLeft /></button>
                                        <button className='right-side-arrow arrow'><SlArrowRight /></button>
                                    </div>
                                </div>
                                <p className='about-experience'>I actively participated in the renowned Hacktoberfest event organized by GitHub, where I made valuable contributions to an open-source project. It was an incredible opportunity to collaborate with the global developer community and contribute to the advancement of open-source software.</p>
                            </div>
                            <div className='socialMedia-icon-container'>
                                <GrLinkedin className='social-icon' />
                                <GrTwitter className='social-icon' />
                                <GrInstagram className='social-icon' />
                                <GrGithub className='social-icon github' />
                                <GrPinterest className='social-icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume