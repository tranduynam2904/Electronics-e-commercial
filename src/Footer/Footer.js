import { BiMoney } from 'react-icons/bi'
import { BsFillAirplaneFill } from 'react-icons/bs'
import { AiFillLike } from 'react-icons/ai'
import { FaPiggyBank, FaTelegramPlane } from 'react-icons/fa'

import './Footer.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../AppContext'
export default function Footer() {
    const { nav } = useContext(AppContext)
    return (

        <div className={`footer ${nav ? "active_footer" : ''}`}>
            <div className="banner">
                <div className="row">
                    <div
                        data-aos="flip-left"
                        data-aos-delay="100"
                        className="col">
                        <p><BiMoney className='icon' />14-DAY MONEY BACK</p>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-delay="200"
                        className="col">
                        <p><BsFillAirplaneFill className='icon' />FAST FREE SHIPMENT</p>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-delay="300"
                        className="col">
                        <p><FaPiggyBank className='icon' />MONEY BACK GUARENTEE</p>
                    </div>
                    <div
                        data-aos="flip-left"
                        data-aos-delay="400"
                        className="col">
                        <p><AiFillLike className='icon' />SAVE 20% WHEN YOU</p>
                    </div>
                </div>
            </div>
            <div className='footer_infomation'>
                <div className='handle_infomation'>
                    <div className='row'>
                        <div className='col'>
                            <h1>STORE INFOMATION</h1>
                            <div style={{ lineHeight: '35px' }}>
                                <p>Elvano - Gear Store</p>
                                <p>555 Mars Street, Moon City</p>
                                <p>Call Us: 0123 456 789</p>
                                <p>Email: tranduynam2904@gmail.com</p>
                            </div>
                        </div>
                        <div className='col'>
                            <h1>INFOMATION</h1>
                            <ul style={{ listStyle: 'none', lineHeight: '35px' }}>
                                <li><Link>About Us</Link></li>
                                <li><Link>Delivery Information</Link></li>
                                <li><Link>Privacy Policy</Link></li>
                                <li><Link>Terms & Conditions</Link></li>
                                <li><Link>Site Map</Link></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h1>EXTRAS</h1>
                            <ul style={{ listStyle: 'none', lineHeight: '35px' }}>
                                <li><Link>Brands</Link></li>
                                <li><Link>Gift Certificates</Link></li>
                                <li><Link>Affiliate</Link></li>
                                <li><Link>Specials</Link></li>
                                <li><Link>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div className='col'>
                            <h1>SUBSCRIBE NOW</h1>
                            <div style={{ lineHeight: '35px' }}>
                                <p>Subscribe our newsletter get 10% off your first update.</p>
                                <p className='handle_input'>
                                    <input type='text' placeholder='Enter Your Email Address'>
                                    </input>
                                    <FaTelegramPlane className='icon' />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}