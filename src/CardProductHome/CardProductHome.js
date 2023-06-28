import axios from "axios"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import './CardProductHome.css'
import { AppContext } from "../AppContext"
import { AiOutlineShoppingCart } from 'react-icons/ai'
export default function CardProductHome() {
    const { product, addCartLatestProduct, latestProduct } = useContext(AppContext)
    return (
        <div className="handle_cardproduct">{latestProduct && latestProduct.map((item, index) => (
            <div data-aos="fade-up" data-aos-duration="1000" className="cardproduct_img">
                <div className="handle_hover">
                    <div className="handle_img">
                        <Link
                            // to={`/product/latest/${item.id}`}
                            onClick={()=>window.location.href = `/product/latest/${item.id}`}
                            >
                            <img src={item.image}>

                            </img></Link>
                    </div>
                    <div className="product_info">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                        <div className="handle_homeproduct_btn">
                            <button style={{
                                fontSize: '1rem',
                                marginBottom: '10px',
                                cursor: 'pointer',
                                borderRadius: '3px',
                            }} onClick={() => addCartLatestProduct(item.id)}><AiOutlineShoppingCart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        ))}</div>
    )
}