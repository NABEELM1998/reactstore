import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {  useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import {AppContext}from './context/AppContext';
import { initialState, reducer } from "./context/AppReducer";

const App = () => {
  const [state, dispatch] = useReducer(reducer,initialState)
  console.log("state",state)
  const getProductData = async () => {
    let res = await fetch("http://localhost:4000/products");
    let data = await res.json();
    console.log("promise",data)
    return data
  };
  // console.log(getProductData())
  useEffect(() => {
    getProductData().then(function(data){
      dispatch({
        type:"PRODUCTS_LOADED",
        payload:data
      })
    })
  }, []);
  console.log("cart",state.cart)
  return (
    <AppContext.Provider value={{state,dispatch}}>
      <div className="appWrapper">
        <Header />

        <Main>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="product/:id" element={<ProductPage/>}/>
          </Routes>
        </Main>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;