import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;  
    const {info} = resData;
    const { name, cuisines, avgRating, deliveryTime,cloudinaryImageId } = info;
    const url = `${CDN_URL}${cloudinaryImageId}.JPG`
    console.log(url);

    return (
        <div className="res-card" style={{ backgroundColor: "bisque" }}>
            <img src={url} alt="res-image" style={{ height: "100px", width: "100px" }} />
            <h3>{name}</h3>
            <h5>{cuisines.join(",")}</h5>
            <h5>{avgRating} rating</h5>
            <h5>{deliveryTime}</h5>
        </div>
    )
}

export default RestaurantCard;