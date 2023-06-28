import { useContext, useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import axios from "axios"
import './Card.css'
import { AppContext } from "../AppContext"
export default function Card() {
    const {
        product,
        addCart,
    } = useContext(AppContext)
    // const refresh = () => window.location.reload(true)

    return (
        <div style={{ marginTop: '10px', background: '#fff' }} className="handle_card">
            {product && product.map((item, index) => (
                <div data-aos="fade-right"
                    data-aos-duration="500"
                    data-aos-easing="ease-in-sine" index={index} className="handle_cardbestselling">
                    <div className="img">
                        <Link
                            key={item.id1}
                            // to={`/product/${item.id1}`}
                            onClick={() => window.location.href = `/product/${item.id1}`}
                        >
                            <img
                                alt={item.name}
                                src={item.image}>
                            </img>
                        </Link>
                    </div>
                    <div className="handle_title">
                        <div className="handle_bestsellingcard">
                            <h5 style={{ color: '#0364BE' }}>{item.name}</h5>
                            <p>${item.price}</p>
                            <div className="button_addtocart">
                                <button onClick={() => addCart(item.id1)}>ADD TO CART</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}