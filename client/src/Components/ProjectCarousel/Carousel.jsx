import React from 'react'
import "./CarouselStyle.css";

const Carousel = ({ title, img }) => {
    return (
        <>

            <div className='carouselContainer'>
                <div className='carDetails'>
                    <img className='carImg' src={img} alt='#CarouselImg' />
                    <h3 className='carTitle'>{title}</h3>
                </div>
            </div>
        </>
    )
}

export default Carousel