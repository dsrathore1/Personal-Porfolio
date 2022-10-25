import React from 'react'
import "./tile.css";
const Tile = (props) => {
    return (
        <>
            <div className='tileContainer'>
                <img className='tileImage' src={props.img} alt="#"></img>
                <h3 className='tileTitle'>{props.title}</h3>
            </div>
        </>
    )
}

export default Tile