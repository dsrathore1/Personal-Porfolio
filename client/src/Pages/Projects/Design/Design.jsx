import React, { useEffect } from 'react'
import './DesignStyle.css';
import ProjectNav from '../ProjectNav';
import Ellipse from '../../../Components/Ellipse/Ellipse';
import ProjectBoxFile from '../../../Components/ProjectBox/ProjectBoxFile';
import {motion} from "framer-motion"

const Design = () => {
    useEffect(() => {
        document.title = 'Portfolio (Design)';
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);

    return (
        <>
            <Ellipse />
            <div className='projectContainer'>
                <ProjectNav />
                <motion.div initial={{ opacity: 0 }} animate={{ y: [-400, 0], opacity: 1 }} transition={{ ease: "easeOut", duration: 2 }} exit={{ opacity: 0 }}>
                <ProjectBoxFile belong="design" />
                </motion.div>
            </div>
        </>
    )
}

export default Design