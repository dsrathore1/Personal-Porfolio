import React from 'react'
import "./ProjectBoxFileStyle.css";

const ProjectBoxFile = ({data}) => {
    return (
        <>
            {
                data.map(records => {
                    return (
                        <div className='projectMainBox ' key={records.id}>
                            <div className='projectBox'>
                                <img src={records.img} className='demoImg' alt='#' />
                                <div className='intro'>
                                    <h1 className='projectTitle'>{records.title}</h1>
                                    <a href={records.gitHubLink} className='gitHubBtn projectBtn'>GitHub</a>
                                    <button className='liveDemoBtn projectBtn'>Live Demo</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProjectBoxFile