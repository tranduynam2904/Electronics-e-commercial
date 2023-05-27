import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Blogs from './Blog/Blog'
import Contact from './Contact/Contact'
import Affiliate from './Affiliate/Affiliate'
import Sitemap from './Sitemap/Sitemap'
import './Header.css'
import logo from './logoGear.png'
import { useState } from 'react'
import Special from './Special/Special'
import { FiMenu } from 'react-icons/fi'
import { useRef } from 'react'
import React from 'react'
export default function Header() {
    const [style, setStyle] = useState(true)
    const dropdown_categories = ()=>{
        
    }
    return (
        <div className='header'>
            <div className='handle_logo'>
                <Link><img src={logo}></img></Link>
            </div>
            <nav>
                <ul className='handle_menu' style={{ listStyle: 'none' }} >
                    <div className='handle_info'>
                        <li onClick={dropdown_categories} className={style} className='menu_categories' style={{ whiteSpace: 'nowrap', fontSize: '0.8rem' }}><FiMenu className='menu_icon' /> SHOP BY CATEGORIES</li>
                        <li style={{ margin: '0px 5px' }} className='menu_li'><Link to={`/home`}>HOME</Link></li>
                        <li className='menu_li'><Link to={`/contact`}>CONTACT</Link></li>
                        <li style={{ margin: '0px 5px' }} className='menu_li'><Link to={`/affiliate`}>AFFILIATE</Link></li>
                        <li className='menu_li'><Link to={`/special`}>SPECIAL</Link></li>
                        <li style={{ margin: '0px 5px' }} className='menu_li'><Link to={`/sitemap`}>SITE MAP</Link></li>
                        <li className='menu_li'><Link to={`/blogs`}>BLOGS</Link></li>
                    </div>
                </ul>
                <ul className='categories'>
                    <li>Gaming LapTop</li>
                    <li>Office LapTop</li>
                    <li>Old Laptop</li>
                    <li>Mouse</li>
                    <li>KeyBoard</li>
                    <li></li>
                    <li></li>
                </ul>
            </nav>


            <Routes>
                <Route path='/' element={<Home />} ></Route>
                <Route path='/home' element={<Home />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
                <Route path='/affiliate' element={<Affiliate />}></Route>
                <Route path='/special' element={<Special />}></Route>
                <Route path='/sitemap' element={<Sitemap />}></Route>
                <Route path='/blogs' element={<Blogs />}></Route>
            </Routes>
        </div>
    )
}