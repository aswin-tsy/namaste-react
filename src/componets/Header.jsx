import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkContext from "../../DarkContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { setDark, isDark } = useContext(DarkContext);
  const [login, setLogin] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div data-testid = 'dark' className={`${isDark && "dark"}`}>
      <div className="  flex bg-white  overflow-hidden w-[100%] h-[150px]  z-50 top-0 justify-between dark:bg-black dark:rounded-none dark:border-2 border-blue-400  rounded-[10px] px-4 shadow-lg shadow-gray-400 p-2  items-center  ">
        <div className="logo-container w-36">
          <img src={LOGO_URL} className="logo"></img>
        </div>

        <div className="nav-items ">
          <ul className="flex gap-8 items-center text-gray-600 dark:text-white text-[20px] font-bold">
            <li>Internet Status: {onlineStatus ? "✅" : "🔴"}</li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about" state={{ data: isDark }}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" state={{ data: isDark }}>
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/grocery">Grocery</Link>
            </li>
            <li>
            <Link to="/cart">Cart - ({cartItems.length})</Link></li>
            <button
              onClick={() =>
                login === "Login" ? setLogin("Logout") : setLogin("Login")
              }
            >
              {login}
            </button>
            <button
              onClick={() => setDark((prev) => !prev)}
              className=" p-2 text-white w-[80px] rounded bg-gray-500 dark:bg-white dark:text-gray-500"
            >
              {isDark ? "Dark" : "Light"}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
