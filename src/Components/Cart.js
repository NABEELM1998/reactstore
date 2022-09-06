import Cartitem from "./Cartitem";
import { currencyFormatter } from "../util";

const Cart = ({cart,setCart}) => {
    let subtotal = cart.reduce((acc,curr) => {
        return acc += curr.count * curr.price 
    },0)
    const clearCartHandler = () => {
        setCart([])
    }
    return cart.length ?(
        <div className="cart">
            <h2>Cart</h2>
            <div className="cartList">
                {
                    cart.map( (cartProduct) => <Cartitem cart = {cart} setCart = {setCart} key = {cartProduct.id} {...cartProduct}/>)
                }
            </div>
            <div className="cartTotal">total:{currencyFormatter(subtotal)}</div>
            <div className="cartFooter">
                <button className="clear" onClick={clearCartHandler} >clear cart</button>
                <button className="checkout">checkout</button>    
            </div> 
        </div>
    ):(<div className="cart">
        <h3>Cart</h3>
        <p>Please add items to your cart</p>
    </div>)
}
export default Cart;