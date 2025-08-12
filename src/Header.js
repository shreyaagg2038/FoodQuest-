
import { LOGO_URL } from "../utils/constants";
import { CART_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
    const [isLogin,setIsLogin] = useState(true);
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul >
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><img className="shoppingCart" src={CART_URL} /></li>
                <button className="login" onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "Login" : "Logout"}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;