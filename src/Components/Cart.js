import React from "react";
import CartItem from "./CartItem";
import { currencyFormatter } from "../util";
import { useAppContext } from "../Hooks/useAppContext";
function Cart() {
 
  const {state,dispatch} = useAppContext()
    console.log("cart In cart.js",state.cart)
  const subTotal = state.cart.reduce((acc, curr) => {
    return acc + curr.count * curr.price;
  }, 0);

  const clearCart = () => {
    // setCart([]);
    dispatch({
      type:"CLEAR_CART"
      
    })
  };

  return (state.cart.length ? (
    <div className="cart">
      <h3>Cart</h3>
      <div className="cartList">
        { state.cart.map((cartProduct) => {
          return <CartItem key={cartProduct.id} {...cartProduct} />;
        }) }
      </div>

      <div className="cartTotal">Total - {currencyFormatter(subTotal)}</div>

      <div className="cartFooter">
        <button onClick={clearCart} className="clear">
          Clear Cart
        </button>
        <button className="checkout">Checkout</button>
      </div>
    </div>
  ) : (
    <div className="cart">
      <h3>Cart</h3>
      <p>Please add Products to the cart</p>
    </div>
  ));
}

export default Cart;