import React from 'react';
import Work from '../Work/Work';
import "./AboutStyle.css";

const About = () => {
    return (
        <>
        <div className='container3' id='about'>
            <div className='aboutContainer'>
                <h2 className='aboutTitle'><img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif" width="42px" height="42px" alt="hi"/> Hey, I'm Digpal, Nice to meet you.</h2>
                <p className='aboutPara'>Since beginning my journey as a developer nearly 5 year ago, I've done remote work for companies, agencies, done some college project, participate in lots of hackathons and collaborated with talented peoples online through GitHub. Contributes in some open sources. I'm quietly confident, naturally curious and perpetually working on improving my chaos designs, development also try to solving DSA problems at a time. </p>
            </div>
            <Work />
        </div>
        </>
    )
}

export default About