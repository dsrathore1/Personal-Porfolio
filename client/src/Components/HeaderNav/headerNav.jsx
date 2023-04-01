import React from 'react';
import { NavLink } from 'react-router-dom';
import "./headerNavStyle.css";

const headerNav = ({ num1, num2, num3 }) => {
    return (
        <>
            <div className='headerNav'>
                <ol className='hnList'>
                    <NavLink className='allList all'>{num1}</NavLink>
                    <NavLink className='allList minor'>{num2}</NavLink>
                    <NavLink className='allList major'>{num3}</NavLink>
                </ol>
            </div>
        </>
    )
}

export default headerNav