import React, { useEffect, useState } from 'react';
import './Banner.css';
import candyBar from './img/banner/CandyBar.png';

const Banner = () => {
  
    return (
        <>
            <div className='banne'>
                <div className="banner">
                </div>
                <div className="banner__box">
                    <img style={{width: '280px'}} src={candyBar} alt={`CandyBar`} />
                    <div className='banner__box__tittle'><h1>Tropical Snack Bar</h1></div>
                </div>
            </div>
        </>
    );
  };
  
  export default Banner;