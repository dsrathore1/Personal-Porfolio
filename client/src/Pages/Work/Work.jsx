import React from 'react'
import DevelopmentLogo from '../../Components/Assets/Development.svg';
import DesignLogo from '../../Components/Assets/Design.svg';
import DevOpsLogo from '../../Components/Assets/DevOps.svg';

import './WorkStyle.css';
import { Link } from 'react-router-dom';

const Work = () => {
    return (
        <>
            <div className='mainContainer' id='works'>
                <div className='Development'>
                    <img className='logo' alt='#logo' src={DevelopmentLogo}></img>
                    <h2 className='Heading'>Dev Projects</h2>
                    <p className='Para'>I like to code things from scratch, and enjoy bringing <br /> ideas to life in the browser and mobiles.</p>

                    <h3 className='Heading2'>Language I speak :</h3>
                    <p className='Para2'>HTML5, CSS3, JS, SASS, EJS </p>

                    <h3 className='Tools'>Dev Tools</h3>
                    <ol className='List'>
                        <li className='Tool'>GitHub</li>
                        <li className='Tool'>Git</li>
                        <li className='Tool'>VS Code</li>
                        <li className='Tool'>Hyper</li>
                        <li className='Tool'>Bootstrap</li>
                        <li className='Tool'>TailwindCSS</li>
                    </ol>
                    <Link to={'/development'}>
                        <a href='#Home' className='moreBtn'>Know More</a></Link>
                </div>

                {/* Design */}
                <div className='Designs'>
                    <img className='logo' alt='#logo' src={DesignLogo}></img>
                    <h2 className='Heading'>Designs</h2>
                    <p className='Para'>I value simple content structure, clean design <br /> patterns, and thoughtful interactions.</p>

                    <h3 className='Heading2'>Things I enjoy designing :</h3>
                    <p className='Para2'>UX, UI, Web, App, Logos</p>

                    <h3 className='Tools'>Design Tools</h3>
                    <ol className='List'>
                        <li className='Tool'>Adobe XD</li>
                        <li className='Tool'>Figma</li>
                        <li className='Tool'>Behance</li>
                        <li className='Tool'>Dribble</li>
                        <li className='Tool'>Adobe Photoshop</li>
                        <li className='Tool'>Adobe Illustration</li>
                    </ol>
                    <Link to='/design'>
                        <a href='#Home' className='moreBtn'>Know More</a>
                    </Link>
                </div>

                {/* DevOps */}
                <div className='DevOps'>
                    <img className='logo' alt='#logo' src={DevOpsLogo}></img>
                    <h2 className='Heading'>DevOps Project</h2>
                    <p className='Para'>I genuinely care about projects, and love to show my work online to peoples. that helping others and my work inspire</p>

                    <h3 className='Heading2'>Experience I draw from :</h3>
                    <p className='Para2'>UI/UX, Product Deployment, Freelancing </p>

                    <h3 className='Tools'>DevOps Tools</h3>
                    <ol className='List'>
                        <li className='Tool'>AWS</li>
                        <li className='Tool'>Azure</li>
                        <li className='Tool'>Google Cloud</li>
                        <li className='Tool'>GitHub Actions</li>
                        <li className='Tool'>Jenkins</li>
                        <li className='Tool'>Docker</li>
                    </ol>
                    <Link to={"/devOps"}>
                        <a href='#Home' className='moreBtn'>Know More</a>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Work