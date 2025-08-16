import { CDN_URL } from "../../utils/constants";
import {image} from "../../assets/food.jpg"

const RestaurantCard = (props) => {
    const { resData } = props;  
    const {info} = resData;
    const { name, cuisines, avgRating, deliveryTime,cloudinaryImageId } = info;
    const url = `${CDN_URL}${cloudinaryImageId}.JPG`

    return (
        <div className="bg-orange-100 hover:bg-orange-300 m-3 p-3 h-[500px] w-80 rounded-lg">
            <img className="border-solid border-yellow-500 h-60 w-80 rounded-lg" src={url} alt="res-image" />
            <h3 className="font-bold text-lg text-pretty m-3">{name}</h3>
            <h5 className="w-16 text-pretty m-3">{cuisines.join(",")}</h5>
            <h5 className="font-bold text-lg text-pretty m-3">{avgRating} rating</h5>
            <h5>{deliveryTime}</h5>
        </div>
    )
}

export default RestaurantCard;