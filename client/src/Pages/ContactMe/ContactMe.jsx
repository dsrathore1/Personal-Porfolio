import React from 'react';
import './ContactMeStyle.css';
import ContactMeSVG from '../../Components/Assets/ContactMe.svg';
import Telephone from "../../Components/Assets/telephone.png";

const ContactMe = () => {
    return (
        <>
            <div className='contactContainer' id='contactMe'>
                <h1 className='contactHeading'><img src={Telephone} className='telePhoneEmoji' alt="#" /> <span className='contactSpan'> Contact</span>Me</h1>
                <div className='innerContainer'>
                    <div className='leftInnerContainer'>
                        <img className='contactSVG' src={ContactMeSVG} alt="#"></img>
                    </div>
                    <div className='rightInnerContainer'>
                        <form action='/Home' method='GET'>
                            <div className='nameInput inputSection'>
                                <input className='inputArea' placeholder='Name' />
                            </div>
                            <div className='emailInput inputSection'>
                                <input className='inputArea' placeholder='Email' type='email' />
                            </div>
                            <div className='phoneInput inputSection'>
                                <input className='inputArea' placeholder='Phone Number' />
                            </div>
                            <div className='messageInput inputSection'>
                                <textarea className='msgArea' placeholder='Message' />
                            </div>
                            <button className='submitBtn' type='submit'>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactMe