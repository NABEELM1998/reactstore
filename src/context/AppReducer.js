export const initialState = {
    cart:[],
    products:[],
    products_loading:true,
    product:{},
    siteName:"React Store"
}

export const reducer = (prevState,action) => {
    switch(action.type){
        case "PRODUCTS_LOADED":
            return {...prevState,products:[...action.payload],products_loading:false}
        case "ADD_TO_CART":
            return {...prevState,cart:[...prevState.cart,action.payload]}
        case "INCREASE_PRODUCT_COUNT":
            let incrementedCart = prevState.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item,count:item.count++}
                }
                return item
            })
            return{...prevState,cart:[...incrementedCart]}
        case "CLEAR_CART":
            return {...prevState,cart:[]}
        case "DECREASE_COUNT":
            let decrementedCart = prevState.cart.map((item)=>{
                if (item.id === action.payload){
                    return {...item,count:item.count--}
                }
                return item
            })
            return {...prevState,cart:[...decrementedCart]}
        case "PRODUCT_LOADED":
            return {...prevState,product:action.payload}
        case "CLEAR_CART_ITEM":
            let current_cart = prevState.cart.filter((item)=>{
                return (item.id!==action.payload)
            })
            return {...prevState,cart:[...current_cart]}
        default:
            return prevState
    }
     
}