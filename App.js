import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/logo.png"; 
import shoppingCart from "./assets/shoppingCart.png"; 

const RestaurantCard =()=>{
    return (
        <div className="res-card" style={{backgroundColor:"bisque"}}>
           <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/a38d20d7-bbb7-4b67-8bdd-7740e85cd4af_385824.JPG" alt="res-image" style={{height:"100px",width:"100px"}}/>
            <h3>Belgian Waffle</h3>
            <h5>waffles,pancakes, shakes,cakes</h5>
            <h5>4.7 rating</h5>
            <h5> 38 mins</h5>
        </div>
    )
}

const Header =()=>{
   return (<div className="header">
        <div className="logo-container">
           <img className="logo" src="https://png.pngtree.com/png-vector/20250217/ourmid/pngtree-unique-food-logo-png-image_15488394.png"/>
        </div>
        <div  className="nav-items">
        <ul >
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li><img className="shoppingCart" src="https://cdn-icons-png.flaticon.com/512/649/649931.png" /></li>
        </ul>
        </div>
    </div>
   )
}

const Body=()=>{
    return(
        <div className="app-body">
            <div className="search-container">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                 <RestaurantCard/>
                  <RestaurantCard/>
            </div>
        </div>
    )
}

const Footer =()=>{
    return (<div className="footer" style={{display:"flex",backgroundColor:"bisque",justifyContent:"space-between"}}>
        <div className="copyright">
            #### COPYRIGHT ####
        </div>
        <div className="address">
            Ambala Cantt Haryana 
        </div>
    </div>)
}

const AppLayout =()=>{
    return (
        <div className="app-container">
            <Header/>
            <Body />
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);