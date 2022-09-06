import {currencyFormatter} from "../util"
const Cartitem = ({id,title,price,image,count,cart,setCart}) => {
    const increaseCountHandler = (_id) => {
            setCart( (prevState) => {
                return prevState.map( (item) => {
                    if (item.id === _id){
                        return {...item,count:item.count++}
                    }
                    return item
                }
                )
            })
    }
    const decreaseCountHandler = (_id) => {
        if(count >1){
            setCart( (prevState) => {
                return prevState.map( (item) => {
                    if (item.id === _id){
                        return {...item,count:item.count--}
                    }
                    return item
                })
            })
        }
        else {
            setCart( (prevState) => {
                return prevState.filter( (item) => item.id !== _id)
            })
        }
        }
        
    
    return (
        <div className="cartItem">
        <div className="itemPic">
          <img src={`./images/${image}`} alt="" />
        </div>
        <div className="itemInfo">
          <p>{title}</p>
          <div className="cartUpdater">
            <button onClick={() => decreaseCountHandler(id)}>-</button>
            <div>{count}</div>
            <button onClick={() => increaseCountHandler(id)}>+</button>
          </div>
        </div>
        <div className="itemPrice">{currencyFormatter(price)}</div>
       </div>
    )
}
export default Cartitem;