import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react';
const Body = () => {
    let [listOfRestaurants,setListofRestaurants] = useState([]);
     let [filteredRestaurant,setfilteredRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
       fetchData();
        console.log("use Effect called");
    },[]);

    const fetchData = async()=>{
        try{
        const data = await fetch("https://pastebin.com/raw/0QcdEDBL");
        const json = await data.json();
        //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        catch(err){
            console.log(err);
        }

    }

    const handleFilter=()=>{
        filteredRestaurant = listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredRestaurant(filteredRestaurant);
    }

    
    return (
        <div className="app-body">
            <div className="filter">
                <div className="filter-container">
                    <input type="text" placeholder="Search for restaurants" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
                    <button onClick={handleFilter} style={{margin:"10px"}}>Search</button>
                </div>
            <button className="search-container" onClick={() => {
                filteredRestaurant = listOfRestaurants.filter((res)=> res.info.avgRating>4.4)
                setfilteredRestaurant(filteredRestaurant);
            }
            }>Top Rated Restaurants
            </button>
            </div>
            <div className="res-container">
                {
                    filteredRestaurant.map((restaurant) => {
                        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    })
                }
            </div>
        </div>
    )
}

export default Body;