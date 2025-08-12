import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import { resList } from "../utils/mockData";
const Body = () => {
    let [listOfRestaurants,setListofRestaurants] = useState(resList);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async()=>{
        const data = await fetch("");
        const json = await data.json();
        
    }

    
    return (
        <div className="app-body">
            <button className="search-container" onClick={() => {
                listOfRestaurants = listOfRestaurants.filter((res)=> res.info.avgRating>4.4)
                setListofRestaurants(listOfRestaurants);
            }
            }>
                Top Rated Restaurants
            </button>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;