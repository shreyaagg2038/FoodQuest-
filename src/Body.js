import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
const Body = () => {
    return (
        <div className="app-body">
            <div className="search-container">
                Search
            </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=>{
                        return <RestaurantCard key = {restaurant.info.id} resData={restaurant}/>
                    })
                }
            </div>
        </div>
    )
}

export default Body;