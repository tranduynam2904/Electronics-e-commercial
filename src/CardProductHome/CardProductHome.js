import axios from "axios"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import './CardProductHome.css'
import { AppContext } from "../AppContext"
import { AiOutlineShoppingCart } from 'react-icons/ai'
export default function CardProductHome() {
    const { product, addCartLatestProduct,latestProduct } = useContext(AppContext)
    return (
        <div className="handle_cardproduct" style={{ padding: '50px' }}>{latestProduct && latestProduct.map((item, index) => (
            <div className="cardproduct_img">
                <div className="handle_img">
                    <Link><img src={item.image}></img></Link>
                </div>
                <div className="product_info">
                    <h3>{item.name}</h3>
                    <p>${item.price}</p>
                    <button style={{
                        fontSize: '1rem',
                        marginBottom: '10px',
                        padding: '5px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: '0.1px solid grey'
                    }} onClick={() => addCartLatestProduct(item.id)}><AiOutlineShoppingCart /></button>
                </div>
            </div>
        ))}</div>
    )
}