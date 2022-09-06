import React from "react";
import ProductItem from "./ProductItem";
function ProductGallery({products, cart, setCart}) {
    return (
    <div className="productGallery">    
      {
        products.map((product) => {
           return <ProductItem key={product.id} {...product} cart={cart} setCart={setCart} />
        })
      }     
    </div>
  );
}

export default ProductGallery;