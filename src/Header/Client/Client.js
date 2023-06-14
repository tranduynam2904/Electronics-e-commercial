import ava1 from './avatar1.png'
import ava2 from './avatar2.png'
import ava3 from './avatar3.png'
import ava4 from './avatar4.png'
import './Client.css'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import LoremIpsum from 'react-lorem-ipsum'
import { Link } from 'react-router-dom'
export const SliderClient = () => {
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
        <div className='handle_client'>
            <Slider className='client' {...settings}>
                <div className='padding_client'>
                    <div className='handle_avatar'>
                        <img sty src={ava1}></img>
                    </div>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <Link className='client_name'>HANA CHIRSTOPHER</Link>
                </div>
                <div className='padding_client'>
                    <div className='handle_avatar'>
                        <img sty src={ava2}></img>
                    </div>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                    <Link className='client_name'>TRINITY IRISH</Link>
                </div>
                <div className='padding_client'>
                    <div className='handle_avatar'>
                        <img sty src={ava3}></img>
                    </div>
                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                    <Link className='client_name'>JOHN BENSON</Link>
                </div>
                <div className='padding_client'>
                    <div className='handle_avatar'>
                        <img sty src={ava4}></img>
                    </div>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    <Link className='client_name'>HENRY LAU</Link>
                </div>
            </Slider>
        </div>

    );
};


