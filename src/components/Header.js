
import { LOGO_URL } from "../../utils/constants";
import { CART_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { ShoppingCart, User } from "lucide-react"


const Header = () => {
    const [isLogin,setIsLogin] = useState(true);

    const onlineStatus = useOnlineStatus();

    return (<div className="m-3 p-3 flex items-center justify-between bg-black">
        <div className="m-3 p-3">
            <img className="w-[280px]" src={LOGO_URL}/>
        </div>
        <div className="m-8 p-">
            <h1 className="text-4xl md:text-6xl font-extrabold text-center text-orange-600 drop-shadow-lg">
                Embark on Your Flavor Quest 🍽️
            </h1>
        </div>
        <div className="m-2 p-2 ">
                <ul className="flex items-center justify-end gap-8 text-white font-medium">
                {/* Online/Offline */}
                <li className="flex items-center gap-2">
                    {onlineStatus ? "Online" : "Offline"}
                    <span
                    className={`w-3 h-3 rounded-full ${
                        onlineStatus ? "bg-green-600" : "bg-red-600"
                    }`}
                    ></span>
                </li>

                {/* Links */}
                <li>
                    <Link className="hover:text-orange-600 transition-colors" to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className="hover:text-orange-600 transition-colors" to={"/about"}>About</Link>
                </li>
                <li>
                    <Link className="hover:text-orange-600 transition-colors" to={"/contact"}>Contact Us</Link>
                </li>
                <li>
                    <Link className="hover:text-orange-600 transition-colors" to={"/grocery"}>Grocery</Link>
                </li>

                {/* Cart */}
                <li className="flex items-center gap-2 cursor-pointer hover:text-orange-600 transition-colors">
                    <ShoppingCart className="w-5 h-5" />
                    <span>Cart</span>
                </li>

                {/* Login/Logout */}
                <li
                    className="flex items-center gap-2 cursor-pointer text-orange-700 hover:text-orange-800 transition-colors"
                    onClick={() => setIsLogin(!isLogin)}
                >
                    <User className="w-5 h-5" />
                    <span>{isLogin ? "Logout" : "Login"}</span>
                </li>
                </ul>

        </div>
    </div>
    )
}

export default Header;