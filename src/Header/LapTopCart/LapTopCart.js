import { useContext, useEffect } from "react"
import { AppContext } from "../../AppContext"
import './LapTopCart.css'
import { FaTrash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function LapTopCart() {
    const { cart, plus, minus, removeItem, show, removeItemLatestProduct,
        cartLatestProduct,
        plusLatestProduct,
        minusLatestProduct,
        totalall,
        totalItem,
        setUser,
        totalItemAll
        // totalitemAll 

    } = useContext(AppContext)
    const handle_resize = () => {
        setUser(false)
        if (window.innerWidth <= 600) {
            setUser(true)
        }
    }
    useEffect(() => {
        handle_resize();
        window.addEventListener('resize', handle_resize)
        return () => {
            window.removeEventListener('resize', handle_resize)
        }
    }, [])

    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="handle_totalboard">
                {/* <tr>
                <td>Products</td>
                <td>Prices</td>
                <td></td>
                
            </tr> */}
                <div className="handle_allinfo">
                    {cart && cart.map((item, index) => {
                        return <div className="handle_info">
                            <div className="img">
                                <img src={item.image}></img>
                            </div>
                            <div className="handle_flexinfoall">
                                <div className="handle_divname">
                                    <p className="name">{item.name}</p>
                                </div>
                                <div className="handle_flexinfo">
                                    <div style={{ fontWeight: 'bold' }} className="handle_originalprice">
                                        <p style={{ display: 'flex', alignItems: 'center' }}>${item.originalprice}</p>
                                    </div>
                                    <div className="handle_pricetotal">
                                        <div className="handle_qty">
                                            <p className="item_qty">{item.qty}</p>
                                            <p className="handle_btn">
                                                <button className='btnminus' onClick={() => minus(item.id1)}>-</button>
                                                <button className='btnplus' onClick={() => plus(item.id1)}>+</button>
                                            </p>
                                        </div>
                                        <div className="handle_divprice">
                                            <p className="price">${item.price}</p>
                                        </div>
                                        <button className='remove' onClick={() => removeItem(item.id1)}><FaTrash /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}
                    {cartLatestProduct && cartLatestProduct.map((item, index) => {
                        return <div className="handle_info">
                            <div className="img">
                                <img src={item.image}></img>
                            </div>
                            <div className="handle_flexinfoall">
                                <div className="handle_divname">
                                    <p className="name">{item.name}</p>
                                </div>
                                <div className="handle_flexinfo">
                                    <div style={{ fontWeight: 'bold' }} className="handle_originalprice">
                                        <p style={{ display: 'flex', alignItems: 'center' }}>${item.originalprice}</p>
                                    </div>
                                    <div className="handle_pricetotal">
                                        <div className="handle_qty">
                                            <p className="item_qty">{item.qty}</p>
                                            <p className="handle_btn">
                                                <button className='btnminus' onClick={() => minusLatestProduct(item.id)}>-</button>
                                                <button className='btnplus' onClick={() => plusLatestProduct(item.id)}>+</button>
                                            </p>
                                        </div>
                                        <div className="handle_divprice">
                                            <p className="price">${item.price}</p>
                                        </div>
                                        <button className='remove' onClick={() => removeItemLatestProduct(item.id)}><FaTrash /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    })}
                </div>
                <div className="handle_totalprice">
                    <div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <p style={{ width: '100%', display: 'inline-block', fontWeight: 'bold' }}>Total Item:</p>
                            <p style={{ fontWeight: 'bold' }}>{totalItemAll}</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', margin: '20px 0px', }}>
                            <p style={{ width: '100%', display: 'inline-block', fontWeight: 'bold' }}>Total Price: </p>
                            <p style={{ fontWeight: 'bold' }}>${totalall}</p>
                        </div>
                    </div>
                    <div className="handle_process">
                        <button><Link to={`/cart/user-cart`}>PROCEED TO CHECKOUT</Link></button>
                    </div>
                </div>
            </div>
        </div>

    )

}