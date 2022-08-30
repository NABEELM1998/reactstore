function ProductItem ({id,name,price}) {
    console.log({id,name,price})
    return (
        <div className="productItem">
            <div className="itemName">{name}</div>
            <div className="itemPic">
                <img src={`https://picsum.photos/id/${id}/600/400`} alt=""></img>
            </div>
            <div className="itemMeta">
                <div className="itemPrice">${price}</div>
                <button className="cartButton">Add to button</button>
            </div>
        </div>
    )
}

export default ProductItem;