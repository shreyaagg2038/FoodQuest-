import { useEffect,useState } from "react";
const useRestaurantMenu =(resId)=>{
    const [resData, setResData] = useState({});
    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        try {
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}`);
            const json = await data.json();
            setResData(json.data);
            // console.log(resData?.cards?.[2]?.card?.card?.info);
            // console.log(resData?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR);
        }
        catch (err) {
            console.log(err);
        }
    }
    return resData;
}

export default useRestaurantMenu;