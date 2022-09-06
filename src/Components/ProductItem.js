import React from "react";
import {currencyFormatter} from "../util"

function ProductItem({ id,title,price,image,cart,setCart }) { 

  let productCount = cart.find((item) => item.id === id)?.count
  const cartHandler = () => {

    setCart((prevState) => {
      let cartProduct = {
        id,
        title,
        price,
        image,
        count :1
      }
      return [...prevState, cartProduct]
    })
    //console.log("cart",cart)
 

  }
  const isInCart = (_id) => {
    return !!(cart.find( (item) => item.id === _id))
  }

  const countHandler = (_id) => {
    let itemIndex = cart.findIndex( (item) => item.id === _id)
    setCart( (prevState) => {
      return prevState.map( (item,index) => {
        if (index === itemIndex){
          return {...item,count:item.count++}
        }
        return item
      })
    })
  }

  return (
    <div className="productItem">
      <div className="itemName">
        <h3>{title}</h3>        
        </div>
      <div className="itemPic">
        <img src={`/images/${image}`} alt=""/>
      </div>
      <div className="itemMeta">
        <div className="itemPrice"> {currencyFormatter(price)} </div>
        {
          isInCart(id) ? (<button className="cartButton" onClick={ () =>countHandler (id)}> {[productCount]} Added to Cart</button>) 
          : (<button className="cartButton" onClick={cartHandler}>Add to Cart</button>)
        }
        
        
      </div>
    </div>
  );
}

export default ProductItem;