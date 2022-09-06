import ProductGallery from "./ProductGallery";
import Cart from "./Cart";

function Main ({products,cart,setCart}) {
    return (
        <div className="appMain">
            <ProductGallery products = {products} cart = {cart} setCart = {setCart}/>
            <Cart cart = {cart} setCart = {setCart}/>
        </div>
    )
    
}
export default Main;
