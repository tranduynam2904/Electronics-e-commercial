import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './LapTop1.png'
import image2 from './LapTop2.jpg'
import image3 from './LapTop3.jpg'
import './Slider.css'

export const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className='slider'>
            <Slider className='handle_slider' {...settings}>
                <div>
                    <img sty src={image1}></img>
                </div>
                <div>
                    <img sty src={image2}></img>
                </div>
                <div>
                    <img sty src={image3}></img>
                </div>
            </Slider>
        </div>
        
    );
};


