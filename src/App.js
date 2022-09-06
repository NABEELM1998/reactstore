import Header from "./Components/Header"
import Main  from "./Components/Main"
import Footer from "./Components/Footer"
//import productData from "./data.json"
import {useState,useEffect} from "react"

const App = () => {
   
    const siteName = "React Shop"
    const [cart, setCart] = useState([])
    const [productData,setproductData] = useState([])
    console.log(cart)
    const getProducts = async() => {
        let res = await fetch("http://localhost:4000/products")
        let data = await res.json()
        setproductData(data)
        
    }
    useEffect( () => {
        getProducts()
    },[])
    
    console.log(productData)
    return(
        <div className="appWrapper">
            <Header name={siteName} />
            <Main products={productData} cart={cart} setCart={setCart}/>
            <Footer name={siteName} />
        </div>
    )
}

export default App