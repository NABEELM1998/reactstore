import React from "react";
import { currencyFormatter } from "../util";
import { useAppContext } from "../Hooks/useAppContext";
function CartItem({ id, title, image, price, count }) {
  const {state,dispatch} = useAppContext();
  const increaseCount = (_id) => {
    // setCart((prev) => {
    //   return prev.map((item) => {
    //     if (_id === item.id) {
    //       return { ...item, count: item.count + 1 };
    //     }
    //     return item;
    //   });
    // });
    dispatch({
      type:"INCREASE_PRODUCT_COUNT",
      payload:_id
    })
  };

  const decreaseCount = (_id) => {
    // if (count > 1) {
    //   setCart((prev) => {
    //     return prev.map((item) => {
    //       if (_id === item.id) {
    //         return { ...item, count: item.count - 1 };
    //       }
    //       return item;
    //     });
    //   });
    // } else {
    //     setCart((prev) => {
    //         return prev.filter(item => item.id !== _id)
    //     })
    // }
      if (count>1){
        dispatch({
          type:"DECREASE_COUNT",
          payload:_id
        })
      }
      else{
        dispatch({
          type:"CLEAR_CART_ITEM",
          payload:_id
        })
      }
    
  };

  return (
    <div className="cartItem">
      <div className="itemPic">
        <img src={`/images/${image}`} alt="" />
      </div>
      <div className="itemInfo">
        <p>{title}</p>
        <div className="cartUpdater">
          <button onClick={() => decreaseCount(id)}>-</button>
          <div>{count}</div>
          <button onClick={() => increaseCount(id)}>+</button>
        </div>
      </div>
      <div className="itemPrice">{currencyFormatter(price)}</div>
    </div>
  );
}

export default CartItem;