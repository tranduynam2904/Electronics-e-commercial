import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import './Card.css'
import { AppContext } from "../AppContext"
export default function Card() {
    const { product, addCart } = useContext(AppContext)
    return (
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
    )
}