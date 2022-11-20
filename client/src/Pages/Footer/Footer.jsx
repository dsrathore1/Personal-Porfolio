import React from 'react'
import './FooterStyle.css';

const Footer = () => {
    return (
        <><div className='mainFooterContainer'>
            <div className='footerContainer'>
                <div className='aboutPortfolio footerInnerContainer'>
                    <h2 className='portfolioHeading'>Digpal's <span className='portSpan'> Portfolio</span></h2>
                    <p className='para1'>Thank you for visiting my personal portfolio  website. Connect with me over social media handle.</p>
                    <br />
                    <p className='para2'> Keep Rising 🚀. Connect with me over live chat!</p>
                </div>
                <div className='quickLink footerInnerContainer'>
                    <h2 className='quickLinksHeading'>Quick Links</h2>
                    <ol className='quickLinkList'>
                        <a href='#nav'>
                            <li className='quickLinks'><span className='nameEmoji'>🏠</span> Home</li>
                        </a>
                        <a href='#about'>
                            <li className='quickLinks'><span className='nameEmoji'>📄</span>  About</li>
                        </a>
                        <a href='#works'>
                            <li className='quickLinks'><span className='nameEmoji'>🖥</span> Projects</li>
                        </a>
                        <a href='#skills'>
                            <li className='quickLinks'><span className='nameEmoji'>🤹‍♂️</span> Skills</li>
                        </a>
                        <a href='#contactMe'>
                            <li className='quickLinks'><span className='nameEmoji'>🤙</span>  Contact Me</li>
                        </a>
                    </ol>
                </div>
                <div className='contactInfos footerInnerContainer'>
                    <h2 className='contactInfoHeading'>Contact Info</h2>
                    <ol className='contactInfoList'>
                        <li className='contactInfo'><span className='nameEmoji'>📞</span>+91 635177***</li>
                        <li className='contactInfo'><span className='nameEmoji'>📧</span>dsrathorebsw1234@gmail.com</li>
                        <li className='contactInfo'><span className='nameEmoji'>🛣</span>	3-6-307, Hyderguda Rd, Avanti Nagar, Basheer Bagh</li>
                    </ol>
                </div>
            </div>
            <h1 className='name-King'>King</h1>
            <span className='creditSpan'>Designed With 💓 by <span className='nameSpan'>Digpal Singh Rathore</span></span>
        </div>
        </>
    )
}

export default Footer