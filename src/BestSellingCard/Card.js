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
                <div data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine" index={index} className="handle_cardbestselling">
                    <div className="img">
                        <Link><img src={item.image}></img></Link>
                    </div>
                    <div className="handle_title">
                        <div>
                            <h5 style={{ color: '#ACBCFF' }}>{item.name}</h5>
                            <p>${item.price}</p>
                            <div className="button_addtocart">
                                <button style={{}} onClick={() => addCart(item.id1)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}