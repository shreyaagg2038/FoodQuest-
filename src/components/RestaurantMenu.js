import { useState, useEffect } from "react";
import { useParams } from "react-router";
import DishInfo from "./DishInfo";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resData = useRestaurantMenu(resId);
    //console.log(resData);


    if (Object.keys(resData).length === 0) {
        return (<div>
            <h1>Loading!!!!</h1>
            </div>)
    }


    const { name, avgRating,id } = resData?.cards?.[2]?.card?.card?.info;
    const itemCards  = resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards

    const categories = itemCards.filter((c)=>c.card.card["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        <div >
            <div className="flex justify-center items-center">
                <h1 className="text-4xl md:text-6xl font-extrabold text-center text-orange-600 drop-shadow-lg">
                    {name} 🍽️
                </h1>
                <span className="text-4xl md:text-3xl font-extrabold text-center text-orange-600 drop-shadow-lg p-3 m-3">{avgRating} Rating</span>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center">
                    <h1 className="text-4xl md:text-3xl font-extrabold text-center text-orange-600 drop-shadow-lg p-3 m-3">Menu</h1>
                    <label className="text-4xl md:text-3xl font-extrabold text-center text-orange-600 drop-shadow-lg p-3 m-3">
                        <input type="checkbox"/>
                        <span className="slider">VegOnly</span>
                    </label>
                </div>
            </div>
            <div ><ul className=" text-center">
                {categories.map((c)=>
                <li  key = {c.card.card.title}><RestaurantCategory data={c.card.card}/> </li>)}
            </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;