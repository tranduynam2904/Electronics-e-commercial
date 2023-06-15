import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blog/Blog'
import Contact from './Contact/Contact'
import Delivery from './Delivery/Delivery'
import Sitemap from './Sitemap/Sitemap'
import './Header.css'
import logo from './logoGear.png'
import { useEffect, useState } from 'react'
import Special from './Special/Special'
import { FiMenu } from 'react-icons/fi'
import { useRef } from 'react'
import React from 'react'
import { AiOutlineLaptop, AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { RiCustomerService2Line } from 'react-icons/ri'
import { HiOutlineUser } from 'react-icons/hi'
import { BiMouseAlt } from 'react-icons/bi'
import { BsKeyboard } from 'react-icons/bs'
import { IoIosArrowForward } from 'react-icons/io'
import axios from 'axios'
import Card from '../BestSellingCard/Card'
import LapTopCart from './LapTopCart/LapTopCart'
import toggle from './toggle.png'
import xmark from './Xmark.png'
import SignIn from './User/SignIn'
import Register from './Register/Register'
import { AppContext } from '../AppContext'
import { useContext } from 'react'
import BlogPages1 from './Blog/BlogPages/BlogPages1'
import BlogPages2 from './Blog/BlogPages/BlogPages2'
import BlogPages3 from './Blog/BlogPages/BlogPages3'
import BlogPages4 from './Blog/BlogPages/BlogPages4'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { SliderClient } from './Client/Client'
import Tabmenu from '../Tabmenu/Tabmenu'
import 'animate.css';
import ava1 from './avatar1.png'
import ava2 from './avatar2.png'
import ava3 from './avatar3.png'
import ava4 from './avatar4.png'
export default function Header() {
    const { show, setShow, showsidebar, hidesidebar, nav, setNav, navmenu, setNavmenu, product, addCart,
        categories, setCategories,
        bestselling, setBestselling,
        client, setClient
    } = useContext(AppContext)
    const handle_toggle = () => {
        setNavmenu(true)
    }
    const handle_resize = () => {
        setNav(!nav)
        setShow(show)
        if (window.innerWidth <= 600) {
            setNav(true)
            setShow(false)
        }
    }
    useEffect(() => {
        handle_resize();
        window.addEventListener('resize', handle_resize)
        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    const handle_catedropdown = () => {
        setCategories(!categories)
    }
    const handle_bestselling_click = () => {
        setBestselling(!bestselling)
    }
    const handle_click_clientsays = () => {
        setClient(!client)
    }
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
        <>
            <div className='header'>
                <div className='handle_logo'>
                    {nav &&
                        <buton onClick={handle_toggle} className='handle_toggle'><img src={toggle}></img></buton>
                    }
                    <Link className='logo_link' onClick={() => showsidebar()} to={`/`}><img src={logo}></img></Link>
                    <div className='search_area'>
                        <p><input type='text' placeholder='Search Product Here'></input><AiOutlineSearch className='search_icon' /></p>
                    </div>
                    <div className='handle_contact'>
                        {!nav &&
                            <RiCustomerService2Line className='customer_icon' style={{ fontSize: "2.3rem", marginRight: '15px' }} />
                        }
                        {!nav &&
                            <div style={{ marginRight: '50px' }} className='phone_number'>
                                <p>Contact</p>
                                <b>0123 456 789</b>
                            </div>
                        }
                        <div className='handle_user'>
                            {!nav &&
                                <Link onClick={() => hidesidebar()} to={`/user`}><HiOutlineUser style={{ cursor: 'pointer', fontSize: '1.8rem', marginRight: '10px' }} /></Link>
                            }
                            <Link onClick={() => showsidebar()} to={`/cart`}><AiOutlineShoppingCart style={{ cursor: 'pointer', fontSize: '1.8rem' }} /></Link>
                        </div>
                    </div>
                </div>
                <div className='fake'></div>
                <nav>
                    <ul className='handle_menu' style={{ listStyle: 'none' }} >

                        <div className='handle_categories'>
                            {show &&
                                <li className='menu_categories' style={{ whiteSpace: 'nowrap', fontSize: '0.8rem' }}><FiMenu className='menu_icon' /> SHOP BY CATEGORIES</li>
                            }
                        </div>
                        {!nav &&
                            <div className='handle_respondmenu' >
                                <li style={{ margin: '0px 5px' }} className='menu_li li1'>
                                    <Link onClick={() => showsidebar()} to={`/home`}>HOME</Link>
                                </li>
                                <li className='menu_li li2'>
                                    <Link onClick={() => showsidebar()} to={`/contact`}>CONTACT</Link>
                                </li>
                                <li style={{ margin: '0px 5px' }} className='menu_li li3'>
                                    <Link onClick={() => showsidebar()} to={`/delivery`}>DELIVERY</Link>
                                </li>
                                <li className='menu_li li4'>
                                    <Link onClick={() => showsidebar()} to={`/special`}>SPECIAL</Link>
                                </li>
                                <li style={{ margin: '0px 5px' }} className='menu_li li5'>
                                    <Link onClick={() => showsidebar()} to={`/sitemap`}>SITE MAP</Link>
                                </li>
                                <li className='menu_li li6'>
                                    <Link onClick={() => showsidebar()} to={`/blogs`}>BLOGS</Link>
                                </li>
                            </div>
                        }
                    </ul>
                    <div className='handle_cate_li' style={{ display: 'flex' }}>
                        {show &&
                            <ul className='cate_li'>
                                <div >
                                    <Tabmenu />
                                </div>
                                <div className='handle_bestselling'>
                                    <p className='title' style={{ width: '250px' }}>BEST SELLING PRODUCTS</p>
                                    <Card />
                                </div>
                                <div style={{ marginTop: '30px' }} className='handle_clientsays'>
                                    <p className='title' style={{ width: '250px' }}>CLIENT SAYS</p>
                                    <SliderClient />
                                </div>

                            </ul>
                        }
                        <div className='handle_path'>
                            <Routes>
                                <Route exact path='/' element={<Home />} ></Route>
                                <Route path='/home' element={<Home />} ></Route>
                                <Route path='/contact' element={<Contact />}></Route>
                                <Route path='/delivery' element={<Delivery />}></Route>
                                <Route path='/special' element={<Special />}></Route>
                                <Route path='/sitemap' element={<Sitemap />}></Route>
                                <Route path='/blogs' element={<Blogs />}></Route>
                                <Route path='/cart' element={<LapTopCart />}></Route>
                                <Route path='/user' element={<SignIn />}></Route>
                                <Route path='/register' element={<Register />}></Route>
                                <Route path='/blogs/blog1' element={<BlogPages1 />}></Route>
                                <Route path='/blogs/blog2' element={<BlogPages2 />}></Route>
                                <Route path='/blogs/blog3' element={<BlogPages3 />}></Route>
                                <Route path='/blogs/blog4' element={<BlogPages4 />}></Route>
                            </Routes>
                        </div>
                    </div>
                    
                        <div>
                            {nav &&
                                <div className={`handle_containdropdown`}
                                    style={{ display: 'flex', justifyContent: 'center' }}>
                                    <ul className='cate_li'>
                                        <li onClick={handle_catedropdown} className='menu_categories'
                                            style={{
                                                whiteSpace: 'nowrap',
                                                fontSize: '0.8rem',
                                                cursor: 'pointer',

                                            }}>
                                            <FiMenu style={{ fontSize: '1.3rem' }} className='menu_icon' />CATEGORIES</li>

                                        <div className='handle_tabmenucategories' style={{ overflow: 'hidden', transition: '1s' }}>
                                            <div className={`handle_tabmenu ${categories ? "active1" : ""}`}  >
                                                <Tabmenu />
                                            </div>
                                        </div>
                                        <div className={`handle_bestselling ${categories ? "active2" : ""}`}>
                                            <p style={{ cursor: 'pointer' }} onClick={handle_bestselling_click} className='title'><FiMenu style={{ fontSize: '1.3rem' }} className='menu_icon' />BEST SELLING PRODUCTS</p>
                                            <div style={{ overflow: 'hidden' }}>
                                                <div style={{ background: '#fff' }} className={`handle_card ${bestselling ? "active3" : ""}`}>
                                                    {product && product.map((item, index) => (
                                                        <div index={index} className="handle_cardbestselling">
                                                            <div className="img">
                                                                <Link>
                                                                    <img src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Apple-Laptop-High-Definiton-Computer-Desktop-Background-Images.jpg">

                                                                    </img>
                                                                </Link>
                                                            </div>
                                                            <div className="handle_title">
                                                                <div>
                                                                    <h1 style={{ color: '#ACBCFF' }}>{item.product}</h1>
                                                                    <p>${item.price}.00</p>
                                                                    <div className="button_addtocart">
                                                                        <button style={{}} onClick={() => addCart(item.id)}>ADD TO CART</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div style={{ marginTop: '3px' }} className='handle_clientsays '>
                                            <p onClick={handle_click_clientsays} className='title' style={{ cursor: 'pointer', width: '100%' }}><FiMenu style={{ fontSize: '1.3rem' }} className='menu_icon' />CLIENT SAYS</p>
                                            <div className={`handle_client ${!client ? "active1" : ''}`}>
                                                <Slider className='client' {...settings}>
                                                    <div className='padding_client'>
                                                        <div className='handle_avatar_respond'>
                                                            <img sty src={ava1}></img>
                                                        </div>
                                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                                        <Link className='client_name'>HANA CHIRSTOPHER</Link>
                                                    </div>
                                                    <div className='padding_client'>
                                                        <div className='handle_avatar_respond'>
                                                            <img sty src={ava2}></img>
                                                        </div>
                                                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text.</p>
                                                        <Link className='client_name'>TRINITY IRISH</Link>
                                                    </div>
                                                    <div className='padding_client'>
                                                        <div className='handle_avatar_respond'>
                                                            <img sty src={ava3}></img>
                                                        </div>
                                                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                                        <Link className='client_name'>JOHN BENSON</Link>
                                                    </div>
                                                    <div className='padding_client'>
                                                        <div className='handle_avatar_respond'>
                                                            <img sty src={ava4}></img>
                                                        </div>
                                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                        <Link className='client_name'>HENRY LAU</Link>
                                                    </div>
                                                </Slider>
                                            </div>
                                        </div>
                                    </ul>
                                </div>
                            }
                        </div>
                   
                </nav >
            </div >
        </>
    )
}