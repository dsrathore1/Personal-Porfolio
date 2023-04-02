import React, { useEffect } from 'react';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectNav from '../ProjectNav';
import './MainStyle.css';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import { motion } from "framer-motion";

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
                    <ProjectBoxFile />
                </motion.div>
            </div>
        </>
    );
}

export default Main