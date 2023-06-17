import React, { useContext, useState } from 'react';
import './Home.css'
import CardProductHome from '../../CardProductHome/CardProductHome';
import { AppContext } from '../../AppContext';
import Slider from 'react-slick';
import { SliderComponent } from '../../Slider/Slider';
import { useEffect } from 'react';
export default function Home() {
    return (
        <>
            <SliderComponent />
            <div className='product_home'>
                <h2>LATEST PRODUCT</h2>
                
                <CardProductHome />
            </div>
            {/* <div className='image'>
                <p style={{ display: 'block', fontSize: '1.8rem' }}
                    className='quality_offer'>Top Quality Offer Summer
                </p>
            </div> */}
        </>
    )
}


