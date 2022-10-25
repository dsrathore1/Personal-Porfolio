import React from 'react'
import './FooterStyle.css';

const Footer = () => {
    return (
        <><div className='mainFooterContainer'>
            <div className='footerContainer'>
                <div className='aboutPortfolio footerInnerContainer'>
                    <h2 className='portfolioHeading'>Digpal's Portfolio</h2>
                    <p className='para1'>Thank you for visiting my personal portfolio  website. Connect with me over social media handle.</p>
                    <br />
                    <p className='para2'> Keep Rising 🚀. Connect with me over live chat!</p>
                </div>
                <div className='quickLink footerInnerContainer'>
                    <h2 className='quickLinksHeading'>Quick Links</h2>
                    <ol className='quickLinkList'>
                        <li className='quickLinks'><span className='nameEmoji'>🏠</span> Home</li>
                        <li className='quickLinks'><span className='nameEmoji'>📄</span>  About</li>
                        <li className='quickLinks'><span className='nameEmoji'>🖥</span> Projects</li>
                        <li className='quickLinks'><span className='nameEmoji'>🤹‍♂️</span> Skills</li>
                        <li className='quickLinks'><span className='nameEmoji'>🏫</span>  Education</li>

                    </ol>
                </div>
                <div className='contactInfos footerInnerContainer'>
                    <h2 className='contactInfoHeading'>Contact Info</h2>
                    <ol className='contactInfoList'>
                        <li className='contactInfo'><span className='nameEmoji'>📞</span>+91 635177***</li>
                        <li className='contactInfo'><span className='nameEmoji'>📧</span>dsrathorebsw1234@gmail.com</li>
                        <li className='contactInfo'><span className='nameEmoji'>🛣</span>	3-6-307, Hyderguda Rd, Avanti Nagar, Basheer Bagh</li>
                    </ol>
                    {/* <ol className='socialMediaList'>
                        <li className='smList'><a href='#GitHub'>
                            <img className='smImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg" alt='#' />
                        </a></li>
                        <li className='smList'><a href='#LinkedIn'>
                            <img className='smImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt='#' />
                        </a></li>
                        <li className='smList'><a href='#Twitter'>
                            <img className='smImg' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/twitter/twitter-original.svg" alt='#' />
                        </a></li>
                    </ol> */}
                </div>
            </div>
            <span className='creditSpan'>Designed With 💓 by <span className='nameSpan'>Digpal Singh Rathore</span></span>
        </div>
        </>
    )
}

export default Footer