import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;  
    const {info} = resData;
    const { name, cuisines, avgRating, deliveryTime,cloudinaryImageId } = info;
    const url = `${CDN_URL}${cloudinaryImageId}.JPG`

    return (
        <div className="bg-orange-100 m-3 p-3 h-96 w-80">
            <img className="border-solid border-yellow-500 h-60 w-80" src={url} alt="res-image" />
            <h3 className="text-2xl text-pretty">{name}</h3>
            <h5 className="w-16">{cuisines.join(",")}</h5>
            <h5>{avgRating} rating</h5>
            <h5>{deliveryTime}</h5>
        </div>
    )
}

export default RestaurantCard;