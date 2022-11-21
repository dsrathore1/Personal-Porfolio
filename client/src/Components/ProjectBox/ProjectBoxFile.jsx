import React from 'react'
import Demo from '../../Pages/Coming Soon/bg1.jpg';
import "./ProjectBoxFileStyle.css";
import ProjectRecords from "./JSON/ProjectJson.json";

const ProjectBoxFile = () => {
    return (
        <>
            {
                ProjectRecords.map(records => {
                    return (
                        <div className='projectMainBox ' key={records.id}>
                            <div className='projectBox'>
                                <img src={Demo} className='demoImg' alt='#'></img>
                                <h1 className='projectTitle'>{records.title}</h1>
                                <a href={records.gitHubLink} className='gitHubBtn projectBtn'>GitHub</a>
                                <button className='liveDemoBtn projectBtn'>Live Demo</button>
                            </div> 
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectBoxFile