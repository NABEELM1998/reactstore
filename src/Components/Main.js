import ProductGallery from "./ProductGallery";

function Main ({products}) {
    return (
        <div className="appMain">
            <ProductGallery products = {products}/>
        </div>
    )
    
}
export default Main;