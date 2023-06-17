import { Link, Routes, Route } from 'react-router-dom'
import Home from '../Header/Home/Home'
import Contact from '../Header/Contact/Contact'
import Affiliate from '../Header/Delivery/Delivery'
import Special from '../Header/Special/Special'
import Sitemap from '../Header/Sitemap/Sitemap'
import Blogs from '../Header/Blog/Blog'
import LapTopCart from '../Header/LapTopCart/LapTopCart'
import './TabmenuRespond.css'
import { useContext, useEffect } from 'react'
import { AppContext } from '../AppContext'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineUser } from 'react-icons/hi'
import Tabmenu from '../Tabmenu/Tabmenu'
import Card from '../BestSellingCard/Card'
export default function TabmenuRespond() {
    const { showsidebar, hidesidebar, nav, setNav, navmenu, setNavmenu, show, setShow, categories, setCategories,
        product, addCart, showsidebar_dropdown, user, setUser,handle_tabmenu
    } = useContext(AppContext)
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
    const handle_close = () => {
        setNavmenu(false)
    }
    
    return (
        <div className={`tabmenurespond ${navmenu ? "active" : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className='handle_close'>
                    <button onClick={handle_close}>X</button>
                </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <Link onClick={() => hidesidebar()} to={`/user`}><HiOutlineUser style={{ cursor: 'pointer', fontSize: '1.8rem' }} /></Link>
            </div>
            <nav>
                <ul>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/home`}>HOME</Link></li>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/contact`}>CONTACT</Link></li>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/delivery`}>DELIVERY</Link></li>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/special`}>SPECIAL</Link></li>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/sitemap`}>SITE MAP</Link></li>
                    <li onClick={handle_tabmenu} className='menu_li'><Link to={`/blogs`}>BLOGS</Link></li>

                </ul>

            </nav>
        </div>
    )
}