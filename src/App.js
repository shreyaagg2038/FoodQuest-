import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png";
import shoppingCart from "../assets/shoppingCart.png";
import Header from "./Header"
import Body from "./Body"
import Footer from "./Footer"



const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);