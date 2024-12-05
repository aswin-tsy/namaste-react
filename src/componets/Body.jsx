import { useContext, useEffect, useState } from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { RestaurantCard, WithPromtedRestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import DarkContext from "../../DarkContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredrestaurantList, setFilteredrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = WithPromtedRestaurantCard(RestaurantCard);
  const {setDark,isDark} = useContext(DarkContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();

    // console.log(list.data, 'lise')
    setRestaurantList(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(restaurantList, 'err')
    setFilteredrestaurantList(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false) return <h1 data-testid= 'internet'>Look like there is some issue with your connection. Please check your internet connection!!</h1>

 

  return restaurantList.length === 0  ? (
    <Shimmer />
  ) :(
    <div data-testid = 'bodyDark' className={`${isDark && "dark"}`}>
      <div className="body px-4 pb-4 dark:bg-black">
      <div className="rests pl-[120px]">
        <div className="search ml-2 border-2 rounded border-gray-400">
          <input className="px-2 dark:bg-black border-none outline-none placeholder:pl-2 dark:text-white"
            type="text"
            data-testid="searchInput"
            placeholder="enter restaurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className=" bg-blue-700 text-white font-bold h-12 w-20"
            onClick={() => {
              const filterValue = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredrestaurantList(filterValue);
              setSearchText("");
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            setFilteredrestaurantList(restaurantList);
          }}
          className="btn-rests"
        >
          All Restaurants
        </button>
        <button
          onClick={() => {
            const data = restaurantList.filter(
              (res) => res.info.avgRating >= 4.4
            );
            setFilteredrestaurantList(data);
          }}
          className="btn-rests"
        >
          Top Rated Restaurants
        </button>
      </div>

      { filteredrestaurantList.length===0? (<div className="not-container">
    <div className="not-found">Restaurant not available </div>
    <p > <span>Sorry </span> <SentimentVeryDissatisfiedIcon /> <span>there are no restaurants available, that matchs your current search word</span> </p>
    </div>
    
  ) : (<div className="res-container">
        
        {filteredrestaurantList.map((res, id) => (

          <Link className="link" key={res.info.id} to={`/restautant/${res.info.id}`}>
            
           {res.info.avgRating>=4.5? <RestaurantCardPromoted  resData={res} /> : <RestaurantCard  resData={res} />}</Link>
        ))}
      </div>)}

      
    </div>
    </div>
    
  );
};

export default Body;
