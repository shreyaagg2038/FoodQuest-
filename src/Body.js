import RestaurantCard from "./RestaurantCard";
import {useState} from 'react';
import { resList } from "../utils/mockData";
const Body = () => {
    let [listOfRestaurants,setListofRestaurants] = useState(resList);
    
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