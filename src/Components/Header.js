import React from "react";
import {Link} from "react-router-dom"
import { useAppContext } from "../Hooks/useAppContext";
function Header() {  
  const {state:{siteName,cart}} = useAppContext()
  let count = cart.reduce((acc,curr)=>acc+curr.count,0)
  return <div className="appHeader">
    <h1><Link to="/">{siteName}</Link></h1>  
    <ul className="nav">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/cart">Cart({count})</Link></li>
      </ul>  
    </div>;
}

export default Header;