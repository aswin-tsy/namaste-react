import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  FOOD_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
// import "./restmenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar } from "@fortawesome/free-solid-svg-icons";

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCatergory from "./RestaurantCatergory";
import RestaurantCatergoryMaual from "./RestaurantCatergoryMaual";
import DarkContext from "../../DarkContext";

const RestaruantMenu = () => {
  const { restId } = useParams();

  const restInfo = useRestaurant(restId);
  const [showIdex, setShowIndex] = useState(null);
  const {setDark,isDark} = useContext(DarkContext);

  //console.log(showIdex, 'show')
 

  if (restInfo === null) return <Shimmer />;

  const { itemCards } =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;
  const { info } = restInfo?.cards[2]?.card?.card;
  
  const categories = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" )


  return (
    <div data-testid= 'resMenuDark' className={`${isDark && "dark"}`}>
     <div className="dark:bg-black py-4">
     <div className="menu w-[900px] mx-auto dark:border-2 dark:bg-yellow-300 dark:border-solid dark:border-green-600">
      <div className="menu-details  dark:text-red-600">
        <span className="m-name">{info.name}</span>
        <div className="res-details dark:border-2 dark:border-red-500">
          <span className="ratings">
            <span>
              <FontAwesomeIcon style={{ color: "green" }} icon={faStar} />{" "}
              {info.avgRating} (9.9k+ ratings)
            </span>
            <span>{info.costForTwoMessage}</span>
          </span>
          <span className="cuisines">{info?.cuisines?.join(", ")}</span>
          <span>{info.areaName}</span>
          <span>{info?.sla?.slaString?.toLowerCase()}</span>
        </div>
      </div>

      <div className=" bg-gray-300 dark:bg-black">
        {categories.map((cate,i)=> 
        // <RestaurantCatergory data={cate?.card.card}/>
        <RestaurantCatergoryMaual key={i}
         category={cate?.card.card}
         showItems={showIdex===i? true : false}
         setShowIndex ={()=>setShowIndex(showIdex===i? null: i)}
         />)}
      </div>
    </div>
     </div>
    </div>
   
  );
};

export default RestaruantMenu;









