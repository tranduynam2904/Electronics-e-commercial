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
        product, addCart
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
    const handle_catedropdown = () => {
        setCategories(!categories)

    }
    return (
        <div className={`tabmenurespond ${navmenu ? "active" : ''}`}>
            <div style={{display:'flex',justifyContent:'center'}}>
                <div className='handle_close'>
                    <button onClick={handle_close}>X</button>
                </div>
            </div>
            <div style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', marginTop: '20px', marginBottom: '20px' }}>
                <Link onClick={() => hidesidebar()} to={`/user`}><HiOutlineUser style={{ cursor: 'pointer', fontSize: '1.8rem' }} /></Link>
            </div>
            <nav>
                <ul>
                    <li className='menu_li'><Link to={`/home`}>HOME</Link></li>
                    <li className='menu_li'><Link to={`/contact`}>CONTACT</Link></li>
                    <li className='menu_li'><Link to={`/delivery`}>DELIVERY</Link></li>
                    <li className='menu_li'><Link to={`/special`}>SPECIAL</Link></li>
                    <li className='menu_li'><Link to={`/sitemap`}>SITE MAP</Link></li>
                    <li className='menu_li'><Link to={`/blogs`}>BLOGS</Link></li>
                    <li onClick={handle_catedropdown} className='menu_categories' style={{ whiteSpace: 'nowrap', fontSize: '0.8rem', cursor: 'pointer' }}><FiMenu style={{ fontSize: '1.3rem' }} className='menu_icon' />CATEGORIES</li>
                </ul>
                <ul className='cate_li'>
                    <div className='handle_tabmenucategories' style={{ overflow: 'hidden', transition: '1s' }}>
                        <div className={`handle_tabmenu ${!categories ? "active1" : ""}`}  >
                            <Tabmenu />
                        </div>
                    </div>
                    <div className={`handle_bestselling ${categories ? "active2" : ""}`}>
                        <p className='title'><FiMenu style={{ fontSize: '1.3rem' }} className='menu_icon' />BEST SELLING PRODUCTS</p>
                        <div style={{ marginTop: '10px', background: '#fff' }} className="handle_card">
                            {product && product.map((item, index) => (
                                <div index={index} className="handle_cardbestselling">
                                    <div className="img">
                                        <Link><img src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Apple-Laptop-High-Definiton-Computer-Desktop-Background-Images.jpg"></img></Link>
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
                </ul>
            </nav>
        </div>
    )
}