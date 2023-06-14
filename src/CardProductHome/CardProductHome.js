import axios from "axios"
import { useContext } from "react"
import { Link } from 'react-router-dom'
import './CardProductHome.css'
import { AppContext } from "../AppContext"
import { AiOutlineShoppingCart } from 'react-icons/ai'
export default function CardProductHome() {
    
    const { product, addCart } = useContext(AppContext)
    return (
        <div className="handle_cardproduct" style={{ padding: '50px' }}>{product && product.map((item, index) => (
            <div className="cardproduct_img">
                <div className="handle_img">
                    <Link><img src="https://www.pixelstalk.net/wp-content/uploads/2016/05/Apple-Laptop-High-Definiton-Computer-Desktop-Background-Images.jpg"></img></Link>
                </div>
                <div className="product_info">
                    <h1>{item.product}</h1>
                    <p>${item.price}.00</p>
                    <button style={{
                        fontSize: '1rem',
                        marginBottom: '10px',
                        padding: '5px 20px',
                        cursor: 'pointer',
                        borderRadius: '5px',
                        border: '0.1px solid grey'
                    }} onClick={() => addCart(item.id)}><AiOutlineShoppingCart /></button>
                </div>
            </div>
        ))}</div>
    )
}