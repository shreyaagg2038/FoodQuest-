
import { LOGO_URL } from "../../utils/constants";
import { CART_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";


const Header = () => {
    const [isLogin,setIsLogin] = useState(true);

    const onlineStatus = useOnlineStatus();

    return (<div className="m-3 p-3 flex justify-between bg-amber-200">
        <div className="m-3 p-3">
            <img className="w-20" src={LOGO_URL}/>
        </div>
        <div className="m-2 p-2 ">
            <ul className="flex " >
                <li className="m-5 p-5">{onlineStatus ? "Online" : "Offline"}<span className={onlineStatus ? "rounded-full bg-green-700" : "offline-status-dot"}></span></li>
                <li className="m-5 p-5"><Link to={"/"}>Home</Link></li>
                <li className="m-5 p-5"><Link to={"/about"}>About</Link></li>
                <li className="m-5 p-5"><Link to={"/contact"}>Contact Us</Link></li>
                <li className="m-5 p-5"><Link to={"/grocery"}>Grocery</Link></li>
                <li className="m-5 p-5"><img className="w-6" src={CART_URL} /></li>
                <button className="text-orange-700" onClick={()=>setIsLogin(!isLogin)}>{isLogin ? "Login" : "Logout"}</button>
            </ul>
        </div>
    </div>
    )
}

export default Header;