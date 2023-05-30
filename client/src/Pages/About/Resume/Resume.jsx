import React from 'react';
import "./ResumeStyle.css";
import { BsDownload } from "react-icons/bs";
import Show from "../../../Components/Assets/Show-case.svg";
import { GrLinkedin, GrTwitter, GrInstagram, GrGithub, GrGlobe } from "react-icons/gr";
import Tile from "../../../Components/Assets/Tile.json";
import { Link } from 'react-router-dom';

const Resume = () => {
    const [exp, setExp] = React.useState([]);

    const getData = async () => {
        const { tile } = await Tile;
        setExp(tile);
        console.log(tile);
    }

    React.useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <div className='resumeNav'>
                <div className='navLeft'>
                    <span className='resumeLogo'>DS<br /><span className='ra'>RA</span></span>
                    <ol className='resumeNavLinks'>
                        <Link to={"/"} className='resumeNavLink navHome'>Home</Link>
                        <Link to={"/projects"} className='resumeNavLink navProjects'>Proj<span className='ects'>ects</span></Link>
                    </ol>
                </div>
                <Link to={"#"} className='downloadResume' onClick={() => { window.alert("Hello World") }}>Resume <BsDownload className='downloadResumeIcon' /></Link>
            </div>
            <div className='resumeDividend'>
                <div className='resumeContainerLeft'>
                    <img className='showImg' src={Show} alt="show-case" />
                </div>
                <div className='resumeContainerRight'>
                    <h1 className='my-name'>Digpal Sin<span className='my-name2'>gh Rathore</span><div className='dot'></div></h1>
                    <p className='my-profession'>- DevOps Engineer</p>
                    <p className='about-me'>I've worked remotely for businesses and agencies since I started my career as a developer over 5 years ago. I've also completed various undergraduate projects, participated in a number of hackathons, and worked with amazing individuals online through GitHub. takes part in various open sources. I have a calm confidence, am naturally interested, am constantly attempting to improve my chaotic designs, and I also strive to solve DSA issues one at a time.</p>
                    <h1 className='eAADTitle'>Experience & Activities</h1>
                    <div className='tiles'>
                        {
                            exp.map((ele) => {
                                return (
                                    <div className='show-tile'>
                                        <div className='show-tile-heading'>
                                            <p className='show-tile-title'>{ele.title}</p>
                                        </div>
                                        <p className='about-experience'>{ele.about}</p>
                                    </div>
                                );
                            })
                        }
                    </div>
                    <div className='socialMedia-icon-container'>
                        <GrLinkedin className='social-icon' />
                        <GrTwitter className='social-icon' />
                        <GrInstagram className='social-icon' />
                        <GrGithub className='social-icon ' />
                        <GrGlobe className='social-icon globe' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Resume