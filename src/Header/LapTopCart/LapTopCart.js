import { useContext } from "react"
import { AppContext } from "../../AppContext"
import './LapTopCart.css'
import { FaTrash } from 'react-icons/fa'

export default function LapTopCart() {
    const { cart, plus, minus, removeItem, show, removeItemLatestProduct,
        cartLatestProduct ,
        plusLatestProduct,
        minusLatestProduct,} = useContext(AppContext)
    return (
        <div className="cart">
            <h1>Cart</h1>
            {cart && cart.map((item, index) => {
                return <div className="handle_info">
                    <div className="img">
                        <img src={item.image}></img>
                    </div>
                    <div className="handle_divname">
                        <p className="name">{item.name}</p>
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
            {/* <LapTopCartLatestProduct/> */}
        </div>

    )

}