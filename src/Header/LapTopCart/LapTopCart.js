import { useContext } from "react"
import { AppContext } from "../../AppContext"
import './LapTopCart.css'
export default function LapTopCart() {
    const { cart, plus, minus, removeItem,show } = useContext(AppContext)
    return (
        
        <div className="cart">
            <h1>Cart</h1>
            {cart && cart.map((item, index) => {
                return <div className="handle_btn">
                    <div key={index}>Name: {item.product}, Quatity: {item.qty}, Price: {item.price}</div>
                    <button className='btnminus' onClick={() => minus(item.id)}>-</button>
                    <button className='btnplus' onClick={() => plus(item.id)}>+</button>
                    <button className='remove' onClick={() => removeItem(item.id)}>X</button>
                </div>
            })}
        </div>
        
    )

}