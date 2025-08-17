import { Link } from "react-router";
import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
import useOnlineStatus from "../../utils/useOnlineStatus";
import SpaceCosmosLanding from "./SpaceCosmosLanding";
import { WithOpenInfoLabel } from "./RestaurantCard";

const Body = () => {
    let [listOfRestaurants,setListofRestaurants] = useState([]);
     let [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    const RestaurantCardOpen = WithOpenInfoLabel(RestaurantCard);

    useEffect(()=>{
       fetchData();
        console.log("use Effect called");
    },[]);

    const fetchData = async()=>{
        try{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5485315&lng=77.1264849&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(listOfRestaurants);
        setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log(err);
        }

    }

    const handleFilter=()=>{
        filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredRestaurant(filteredRestaurant);
    }

    
    const onlineStatus = useOnlineStatus();
    if(!onlineStatus){
        return (
            <SpaceCosmosLanding />
        )
    }

    if(!filteredRestaurant){
        return (<h1>Loading.....</h1>)
    }
    return (
        <div className="m-3 p-3 bg-black">
            <div className="flex m-3 ml-0">
                <div className="flex">
                    <input className="border-solid border-4 p-2 rounded-lg"type="text" placeholder="Search for restaurants" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button className="bg-slate-300 p-3 rounded-lg" onClick={handleFilter} style={{margin:"10px"}}>Search</button>
                </div>
            <button className="bg-orange-300 p-3 rounded-lg" onClick={() => {
                filteredRestaurant = listOfRestaurants.filter((res)=> res.info.avgRating>4.4)
                setfilteredRestaurant(filteredRestaurant);
            }
            }>Top Rated Restaurants
            </button>
            </div>
            <div className="flex  flex-wrap gap-10">
                {
                    filteredRestaurant.map((restaurant) => {
                        return <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}>
                            {/* <h1 className="text-white">{restaurant.info.isOpen ? "OPEN" : "CLOSED"}</h1> */}
                            {restaurant.info.isOpen ? (<RestaurantCardOpen  resData={restaurant} />) : (<RestaurantCard resData={restaurant}/>)}
                            </Link>
                    })
                }
            </div>
        </div>
    )
}

export default Body;