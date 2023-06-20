import { useContext } from "react"
import { AppContext } from "../../AppContext"
import './LapTopCart.css'
import { FaTrash } from 'react-icons/fa'

export default function LapTopCart() {
    const { cart, plus, minus, removeItem, show, removeItemLatestProduct,
        cartLatestProduct,
        plusLatestProduct,
        minusLatestProduct,
        totalall,
        totalitem,
        totalitemAll } = useContext(AppContext)
    return (
        <div className="cart">
            <h1>Cart</h1>
            <div className="handle_totalboard"> 
            {/* <tr>
                <td>Products</td>
                <td>Prices</td>
                <td></td>
                
            </tr> */}
                <div style={{width:'75%',margin:'20px 20px 0px 20px'}}>
                    {cart && cart.map((item, index) => {
                        return <div className="handle_info">
                            <div className="img">
                                <img src={item.image}></img>
                            </div>
                            <div className="handle_divname">
                                <p className="name">{item.name}</p>
                            </div>
                            <div style={{ fontWeight: 'bold' }} className="handle_originalprice">
                                <p>${item.originalprice}</p>
                            </div>
                            <div className="handle_qty">
                                <p>{item.qty}</p>
                                <div className="handle_btn">
                                    <button className='btnminus' onClick={() => minus(item.id1)}>-</button>
                                    <button className='btnplus' onClick={() => plus(item.id1)}>+</button>
                                </div>
                            </div>
                            <div className="handle_divprice">
                                <p className="price">${item.price}</p>
                            </div>
                            <button className='remove' onClick={() => removeItem(item.id1)}><FaTrash /></button>
                        </div>
                    })}
                    {cartLatestProduct && cartLatestProduct.map((item, index) => {
                        return <div className="handle_info">
                            <div className="img">
                                <img src={item.image}></img>
                            </div>
                            <div className="handle_divname">
                                <p className="name">{item.name}</p>
                            </div>
                            <div style={{ fontWeight: 'bold' }} className="handle_originalprice">
                                <p>${item.originalprice}</p>
                            </div>
                            <div className="handle_qty">
                                <p>{item.qty}</p>
                                <div className="handle_btn">
                                    <button className='btnminus' onClick={() => minusLatestProduct(item.id)}>-</button>
                                    <button className='btnplus' onClick={() => plusLatestProduct(item.id)}>+</button>
                                </div>
                            </div>
                            <div className="handle_divprice">
                                <p className="price">${item.price}</p>
                            </div>
                            <button className='remove' onClick={() => removeItemLatestProduct(item.id)}><FaTrash /></button>
                        </div>
                    })}
                </div>
                <div className="handle_totalprice">
                    <div>
                        <div style={{ width: '100%', display: 'flex' }}>
                            <p style={{ width: '100%', display: 'inline-block', fontWeight: 'bold' }}>Total Item:</p>
                            <p style={{ fontWeight: 'bold' }}>{totalitemAll}</p>
                        </div>
                        <div style={{ width: '100%', display: 'flex', margin: '20px 0px', }}>
                            <p style={{ width: '100%', display: 'inline-block', fontWeight: 'bold' }}>Total Price: </p>
                            <p style={{ fontWeight: 'bold' }}>${totalall}</p>
                        </div>
                    </div>
                    <div className="handle_process">
                        <button>PROCEED TO CHECKOUT</button>
                    </div>
                </div>
            </div>
        </div>

    )

}