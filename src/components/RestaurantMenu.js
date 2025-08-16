import { useState, useEffect } from "react";
import { useParams } from "react-router";
import DishInfo from "./DishInfo";

const RestaurantMenu = () => {

    const [resData, setResData] = useState({});
    const { resId } = useParams();
    const [items, setItems] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [buttonClicked, setButtonClicked] = useState(false);


    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
            const json = await data.json();
            const { itemCards } = json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
            setResData(json?.data);
            setItems(itemCards);
            setFilterItems(itemCards);
        }
        catch (err) {
            console.log(err);
        }

    }

    if (!resData?.cards) {
        return <h1>Loading!!!!</h1>;
    }

    const handleVeg = () => {
        if (!buttonClicked) {
            setFilterItems(items.filter((item) => item.card.info.isVeg === 1));
        }
        else {
            setFilterItems(items);
        }
        setButtonClicked(!buttonClicked);

    }

    const { name, avgRating } = resData?.cards?.[2]?.card?.card?.info;


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
                        <input type="checkbox" onClick={handleVeg} />
                            <span className="slider">VegOnly</span>
                    </label>
                </div>
            </div>
            <div>
                <ul className="flex flex-wrap gap-10 m-20">
                    {
                        filterItems?.map((item) => {
                            return (
                                <li key={item.card.info.id}>
                                    {/* {item?.card?.info?.name}- Rs {item?.card?.info?.defaultPrice || item?.card?.info?.price} */}
                                    <DishInfo name={item?.card?.info?.name} price={item?.card?.info?.defaultPrice || item?.card?.info?.price} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;