import React, { useEffect,useState } from "react";
import { currencyFormatter } from "../util";
import { useParams } from "react-router-dom";
import { useAppContext } from "../Hooks/useAppContext";
function ProductPage() {
  const { id } = useParams();
  const {state,dispatch} = useAppContext()
  const [product,setProduct] = useState()
  const getProduct = async () => {
    let res = await fetch(`http://localhost:4000/products/${id}`);
    let data = await res.json();
    setProduct(data)
    console.log("date",data)

    //return data
  };
  useEffect(() => {
    console.log("useeeffert")
    getProduct()
    // getProduct().then((data)=>{
    //   dispatch({
    //     type:"PRODUCT_LOADED",
    //     payload:data
    //   })
    // })
  }, []);

  const isInCart = (_id) => {
    return !!state.cart.find((item) => item.id === _id);
  };

  let productCount = state.cart.find((item) => item.id === id)?.count;

  const countHandler = (_id) => {
    // let itemIndex = cart.findIndex((item) => item.id === _id);
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
    //     title: product.title,
    //     price: product.price,
    //     image: product.image,
    //     count: 1,
    //   };
    //   return [...prevState, cartProduct];
    // });
    let cartProduct = {
          id,
          title:product.title,
          price:product.price,
          image: product.image,
          count: 1,
        };

    dispatch({
      type:"ADD_TO_CART",
      payload:cartProduct
    })
  };
  console.log("singleproduct",product)
  return (
    <div className="singleProduct">
      <img src={`/images/${product?.image}`} alt="" />
      <div>
        <h1>{product?.title}</h1>
        <h3>{product && currencyFormatter(product?.price)}</h3>
        <div>
          {isInCart(id) ? (
            <button className="cartButton" onClick={() => countHandler(id)}>
              {productCount} Added to Cart
            </button>
          ) : (
            <button className="cartButton" onClick={cartHandler}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductPage;