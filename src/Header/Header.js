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
// import 'bootstrap/dist/css/bootstrap.min.css';
import Tabmenu from '../Tabmenu/Tabmenu'

export default function Header() {
    const { show, setShow, showsidebar, hidesidebar, nav, setNav, navmenu, setNavmenu } = useContext(AppContext)
    const handle_toggle = () => {
        setNavmenu(true)
    }
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
                                <li style={{ margin: '0px 5px' }} className='menu_li'><Link onClick={() => showsidebar()} to={`/home`}>HOME</Link></li>
                                <li className='menu_li'><Link onClick={() => showsidebar()} to={`/contact`}>CONTACT</Link></li>
                                <li style={{ margin: '0px 5px' }} className='menu_li'><Link onClick={() => showsidebar()} to={`/delivery`}>DELIVERY</Link></li>
                                <li className='menu_li'><Link onClick={() => showsidebar()} to={`/special`}>SPECIAL</Link></li>
                                <li style={{ margin: '0px 5px' }} className='menu_li'><Link onClick={() => showsidebar()} to={`/sitemap`}>SITE MAP</Link></li>
                                <li className='menu_li'><Link onClick={() => showsidebar()} to={`/blogs`}>BLOGS</Link></li>
                            </div>
                        }
                    </ul>
                    <div style={{ display: 'flex' }}>
                        {show &&
                            <ul className='cate_li'>
                                <div >
                                    <Tabmenu />
                                </div>
                                <div className='handle_bestselling'>
                                    <p className='title' style={{ width: '250px' }}>BEST SELLING PRODUCTS</p>
                                    <Card />
                                </div>
                                <div style={{marginTop:'30px'}} className='handle_client'>
                                    <p className='title' style={{ width: '250px' }}>CLIENT SAYS</p>
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

                </nav >

            </div >
        </>
    )
}