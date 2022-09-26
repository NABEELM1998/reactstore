import React, { useMemo } from "react";
import { currencyFormatter } from "../util";
import { Link } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";
function ProductItem({ id, title, price, image}) {
  const formattedPrice = useMemo(()=>currencyFormatter(price),[price])
  const {state,dispatch} = useAppContext();
  const isInCart = (_id) => {
    return !!state.cart.find((item) => item.id === _id);
  };

  let productCount = state.cart.find((item) => item.id === id)?.count;

  const countHandler = (_id) => {
    //let itemIndex = state.cart.findIndex((item) => item.id === _id);
    // setCart((prev) => {
    //   return prev.map((item, index) => {
    //     if (index === itemIndex) {
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

  const cartHandler = () => {
    // setCart((prevState) => {
    //   let cartProduct = {
    //     id,
    //     title,
    //     price,
    //     image,
    //     count: 1,
    //   };
    //   return [...prevState, cartProduct];
    // });

    let cartProduct = {
          id,
          title,
          price,
          image,
          count: 1,
        };

        dispatch({
          type:"ADD_TO_CART",
          payload:cartProduct
        })


  };

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>
      </div>
      <div className="itemPic">
        <Link to={`/product/${id}`}>
          <img src={`/images/${image}`} alt="" />
        </Link>
      </div>
      <div className="itemMeta">

        <div className="itemPrice"> {formattedPrice} </div>

        {isInCart(id) ? (
          <button className="cartButton" onClick={() => countHandler(id)}>
            {" "}
            {productCount} Added to Cart{" "}
          </button>
        ) : (
          <button className="cartButton" onClick={cartHandler}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductItem;