import { useEffect, useState } from "react";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredrestaurantList, setFilteredrestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const list = await data.json();

    console.log(list.data)
    setRestaurantList(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredrestaurantList(
      list?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

 

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) :(
    <div className="body">
      <div className="rests">
        <div className="search">
          <input
            type="text"
            placeholder="enter restaurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
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
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>)}

      
    </div>
  );
};

export default Body;
