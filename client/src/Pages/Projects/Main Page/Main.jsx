import React, { useEffect } from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';
import { motion } from "framer-motion";
import data from "../../../Components/ProjectBox/JSON/jsonFile.json";

const Main = () => {
    useEffect(() => {
        document.title = 'Portfolio (Projects)';
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Ellipse />
            <div className='h21'>
                <ProjectNav />
                <div className='mainPageContainer'>
                </div>
                <motion.div initial={{ opacity: 0 }} animate={{ y: [-400, 0], opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} exit={{ opacity: 0 }}>
                    {
                        data.map((records) => {
                            return (
                                <div className='projectMainBox' key={records.id}>
                                    <div className='projectBox'>
                                        <img src={records.img} className='demoImg' alt='#' />
                                        <div className='intro'>
                                            <h1 className='projectTitle'>{records.title}</h1>
                                            <a href={records.gitHubLink} className='gitHubBtn projectBtn'>GitHub</a>
                                            <button onClick={records.liveDemoLink} className='liveDemoBtn projectBtn'>Live Demo</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </motion.div>
            </div>
        </>
    );
}

export default Main