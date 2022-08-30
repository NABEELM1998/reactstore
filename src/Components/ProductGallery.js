import ProductItem from "./ProductItem";
function ProductGallery ({products}) {
    
    
    return (
        <div className="productGallery">
            {
                products.map( (product) => {
                return <ProductItem key={product.id} {...product}/>
                })
            }
        </div>
    )
}

export default ProductGallery;