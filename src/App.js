import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/logo.png";
import shoppingCart from "../assets/shoppingCart.png";
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import RestaurantCard from "./components/RestaurantCard";
import { lazy ,Suspense} from "react";
// import Grocery from "./components/Grocery";

const Grocery = lazy(()=>import("./components/Grocery"))

const AppLayout = () => {
    return (
        <div className="app-container">
            <Header />
            <Outlet/>
            <Footer />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        children:[
        {
        path:"/",
        element: <Body/>
        },
        {
        path:"/about",
        element: <About/>
        },
        {
        path:"/contact",
        element: <Contact/>
        },
        {
        path:"/grocery",
        element: <Suspense fallback ={<h1>Still Loading</h1>}><Grocery/></Suspense>
        },
        {
        path:"/restaurant/:resId",
        element: <RestaurantMenu/>
        },
        ],
        errorElement:<Error/>
    },


])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);